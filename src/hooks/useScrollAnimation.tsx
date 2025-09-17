import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Debug: visibility triggered
          if (import.meta.env.DEV) {
            console.log('[useScrollAnimation] visible', { el: element?.tagName, threshold, rootMargin, triggerOnce });
          }
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          if (import.meta.env.DEV) {
            console.log('[useScrollAnimation] hidden', { el: element?.tagName });
          }
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (import.meta.env.DEV) {
            console.log('[useStaggeredAnimation] container visible', { itemCount, delay });
          }
          // Stagger the animation of items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => (prev.includes(i) ? prev : [...prev, i]));
            }, i * delay);
          }
          observer.unobserve(container);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [itemCount, delay]);

  return { containerRef, visibleItems };
};