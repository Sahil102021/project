import { useState, useEffect } from "react";

const useOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      // Check if the click is outside the element
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(false); // Close the dropdown or deactivate the element
      }
    };

    if (isActive) {
      // Attach the event listener if the element is active
      window.addEventListener("click", onClick);
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default useOutsideClick;
