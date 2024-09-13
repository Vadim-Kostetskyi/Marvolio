const heightChange = (
  ref: React.RefObject<HTMLDivElement>,
  isVisible: boolean
) => {
  if (ref.current) {
    if (isVisible) {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.height = "auto";
        }
      }, 300);
    } else {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.height = "0";
        }
      });
    }
  }
};

export default heightChange;
