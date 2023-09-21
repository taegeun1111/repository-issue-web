import {RefObject, useEffect} from "react";
import {Issue} from "../types/Issue";

const useIntersectionObserver  = (
  targetRef: RefObject<Element>,
  callback: () => void,
  lists: Issue[],
) =>{
  useEffect(() => {
    const lastElement = targetRef.current;
    const observer = new IntersectionObserver(entries => {
      const isIntersecting = entries[0].isIntersecting;
      if (isIntersecting) {
        callback();
      }
    });

    if (lastElement) {
      observer.observe(lastElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [lists]);
};

export default useIntersectionObserver;
;