import { useEffect, useRef } from "react";

const throttle = (callback, delay) => {
  let lastCall = 0;
  return (...arg) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall == now;
      callback(...arg);
    }
  };
};
function InfiiniteScroll({ fetchMore }) {
  const isFetching = useRef(false);
  function hnadleScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const thresHold = 600;
    if (
      scrollTop + windowHeight >= documentHeight - thresHold &&
      !isFetching.current
    ) {
      isFetching.current = true;
      isFetching.current = true;
      fetchMore().finally(() => {
        isFetching.current = false;
      });
    }
  }
  useEffect(() => {
    const throttleScroll = throttle(hnadleScroll, 500);
    window.addEventListener("scroll", throttleScroll);

    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "20px" }}>
        🔥 নিচে স্ক্রল করলেই লোড হবে
      </h2>
    </div>
  );
}

export default InfiiniteScroll;
