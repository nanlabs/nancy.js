import React, { useState, useEffect, useCallback, useRef } from "react";
import { useUnmount } from "../use-unmount";

export type ImageDecoding = "auto" | "sync" | "async";
export type ImageLoading = "auto" | "eager" | "lazy";

const loadImage = async (
  ref: React.RefObject<HTMLImageElement>,
  src: string,
  onLoad?: React.ReactEventHandler<HTMLImageElement>
): Promise<string> => {
  const image = ref.current;

  if (!image) {
    throw new Error("Image not found");
  }

  return new Promise((resolve, reject) => {
    image.onload = (e) => {
      if (onLoad)
        onLoad(e as unknown as React.SyntheticEvent<HTMLImageElement>);
      resolve(src);
    };

    image.onerror = () => {
      reject(new Error("Image load failed"));
    };
    image.src = src;
  });
};

const getDefaultImageSource = ({
  initialSrc,
  initialTimeout = 0,
  src,
  delay = 0,
  maxRetry = 0,
  fallback,
}: {
  initialSrc?: string;
  initialTimeout?: number;
  src?: string;
  delay?: number;
  maxRetry?: number;
  fallback?: string | string[];
}) => {
  if (initialSrc && initialTimeout <= 0) {
    return initialSrc;
  }

  if (src && delay <= 0 && maxRetry <= 0 && !fallback?.length) {
    return src;
  }

  return undefined;
};

export interface UseImageRequest {
  src?: string;
  initialSrc?: string;
  fallback?: string | string[];
  initialTimeout?: number;
  delay?: number;
  maxRetry?: number;
  retryDelay?: number;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}

export interface UseImageResponse {
  src?: string;
  isFetching: boolean;
  error?: Error | null;
}

const useImage = ({
  initialSrc,
  src,
  fallback,
  initialTimeout,
  delay,
  maxRetry = 0,
  retryDelay = 0,
  onLoad,
}: UseImageRequest): UseImageResponse => {
  const defaultImageSource = getDefaultImageSource({
    initialSrc,
    initialTimeout,
    src,
    delay,
    maxRetry,
    fallback,
  });

  const ref = useRef<HTMLImageElement | null>(null);
  const isLoaded = useRef(false);
  const loadRetryAttemptsLeft = useRef(maxRetry);
  const [imageSource, setImageSource] = useState<string | undefined>(
    defaultImageSource
  );
  const [initialized, setInitialized] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const handleInitialTimeout = useCallback(() => {
    if (!initialSrc) return;

    if (initialTimeout && initialTimeout > 0) {
      setTimeout(() => {
        if (!isLoaded.current) setImageSource(initialSrc);
      }, initialTimeout);
    } else {
      setImageSource(initialSrc);
    }
  }, [initialSrc, initialTimeout]);

  const tryLoadImage = useCallback(async () => {
    setIsFetching(true);

    const nextFallback =
      typeof fallback === "string" ? [fallback] : fallback || [];
    const srcs = src ? [src, ...nextFallback] : nextFallback;

    for (const targetSrc of srcs) {
      try {
        const img = await loadImage(ref, targetSrc, onLoad);
        if (img) {
          setImageSource(img);
          isLoaded.current = true;
          break;
        }
      } catch {
        // ignore this case. We will try next src
      }
    }

    setIsFetching(false);
  }, [src, fallback, delay, onLoad]);

  const handleLoadImage = useCallback(() => {
    if (delay && delay > 0) {
      setTimeout(() => {
        tryLoadImage();
      }, delay);
    } else {
      tryLoadImage();
    }
  }, [delay, tryLoadImage]);

  const handleCleanup = useCallback(() => {
    if (ref.current) {
      ref.current.onload = null;
      ref.current.onerror = null;
      ref.current = null;
    }
  }, []);

  useEffect(() => {
    ref.current = new Image();
    handleInitialTimeout();
  }, []);

  useEffect(() => {
    if (!initialized) return;

    if (isFetching) return;

    if (loadRetryAttemptsLeft.current <= 0) {
      if (!imageSource) setImageSource(src);
      handleCleanup();
      return;
    }

    if (imageSource === src) return;

    setTimeout(() => {
      loadRetryAttemptsLeft.current -= 1;
      handleLoadImage();
    }, retryDelay * (maxRetry - loadRetryAttemptsLeft.current));
  }, [
    handleCleanup,
    imageSource,
    src,
    handleLoadImage,
    initialized,
    isFetching,
  ]);

  useEffect(() => {
    if (initialized) return;

    setInitialized(true);
    handleLoadImage();
  }, [initialized, handleLoadImage]);

  useEffect(() => {
    // reset the amount of retries any time we change something related with the image load
    loadRetryAttemptsLeft.current = maxRetry;
  }, [initialSrc, initialTimeout, src, delay, maxRetry, fallback]);

  useUnmount(handleCleanup);

  return {
    src: imageSource,
    // isFetching will be used to determine if it is needed to render a loader or something similar.
    // if we already loaded a valid image source, there is no need of showing the loading state.
    isFetching: !imageSource,
  };
};

export default useImage;
