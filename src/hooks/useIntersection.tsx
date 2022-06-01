import {useState, useEffect, useRef} from 'react'

export const useIntersection = (options: any) => {
    const containerRef: any = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const callback = (entries: any) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting);

        // uncomment if you need to trigger it once
        // observer.unobserve(element.current);
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.unobserve(containerRef.current);
    }, []);

    return [containerRef,isVisible];
};
