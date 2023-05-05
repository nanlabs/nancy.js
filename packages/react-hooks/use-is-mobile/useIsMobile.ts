import { useEffect, useState } from "react";
const useIsMobile = (): boolean => {
  const mobile = /phone|tablet/i.test(navigator?.userAgent);

  const [isMobile, setIsMobile] = useState<boolean>(mobile);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768 || mobile);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isMobile;
};

export default useIsMobile;
