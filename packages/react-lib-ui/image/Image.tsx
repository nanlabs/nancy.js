import React from "react";
import { useImage, UseImageRequest } from "@nanlabs/react-hooks";

export type ImageDecoding = "auto" | "sync" | "async";
export type ImageLoading = "auto" | "eager" | "lazy";

type ReactImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export interface ImageProps
  extends Omit<ReactImageProps, "decoding" | "loading" | "src">,
    UseImageRequest {
  decoding?: ImageDecoding;
  loading?: ImageLoading;
  className?: string;
}

const classNames = (className: string, loading: boolean) => {
  return className
    .split(/\s/)
    .map((name) => (loading ? `${name} ${name}-loading` : name))
    .join(" ");
};

const Image = ({
  initialSrc,
  initialTimeout,
  src,
  fallback,
  delay,
  maxRetry,
  retryDelay,
  decoding = "async",
  loading = "lazy",
  className = "async-image",
  onLoad,
  style,
  width,
  height,
  ...rest
}: ImageProps) => {
  const { src: targetSrc, isFetching } = useImage({
    initialTimeout,
    initialSrc,
    src,
    fallback,
    delay,
    maxRetry,
    retryDelay,
    onLoad,
  });

  return (
    <img
      {...rest}
      src={targetSrc}
      width={width}
      height={height}
      style={style}
      decoding={decoding === "auto" ? undefined : decoding}
      loading={loading === "auto" ? undefined : loading}
      className={classNames(className, isFetching)}
    />
  );
};

export default Image;
