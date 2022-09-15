import { useRef, useEffect } from "react";
// @ts-ignore
import { Carousel as NativeCarousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel.css";

interface CarouselProps {
  items: string[];
  options: any;
}

function Carousel({ items, options }: CarouselProps) {
  const wrapper = useRef(null);

  useEffect(() => {
    const slideItems = items || [];
    const opts = options || {};

    opts.slides = [...slideItems].map((val) => {
      return { html: val };
    });

    const instance = new NativeCarousel(wrapper.current, opts);

    return () => {
      instance.destroy();
    };
  }, [items, options]);

  return <div className={`carousel`} ref={wrapper}></div>;
}

export default Carousel;
