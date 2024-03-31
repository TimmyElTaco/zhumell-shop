import { useEffect, useRef, useState } from "react";

export default function useIntersection(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef()

    useEffect(() => {

        const element = elementRef.current;
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsIntersecting(entry.isIntersecting)
            })
        } ,options)
    

        if(elementRef) {
            observer.observe(element);
        }
    
        return () => {
            if(elementRef) {
                observer.unobserve(element);
            }
        }

    }, []);

    return [elementRef, isIntersecting]
};