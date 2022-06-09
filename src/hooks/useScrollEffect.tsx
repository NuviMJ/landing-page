import {debounce} from 'lodash';
import {useState, useEffect, useRef} from 'react'

export const useScrollEffect = () => {
    const containerRef: any = useRef();
    const [stepOpacity, setStepOpacity] = useState({
        op1: 1.0,
        op2: 0,
        op3: 0,
    })
    const [isTop, setIsTop] = useState(true)
    const [scrolling, setScrolling] = useState(false)

    let op1 = 1.0;
    let op2 = 0.0;
    let op3 = 0.0;
    const scrollCallback = () => {
        if (containerRef.current) {
            let scroll = window.scrollY
            let element: any = containerRef.current
            let yt = scroll - element.offsetTop
            const scrollEnd = element.offsetHeight - window.innerHeight
            // console.log('screen:' ,scroll)

            // console.log('element top:' + (element.offsetHeight -window.innerHeight))
            if (yt >= 0 && yt <= scrollEnd) {
                setScrolling(true)
                calcOpacity(yt, scrollEnd)
            } else if (yt < 0) {
                setScrolling(false)
                setIsTop(true)
                setStepOpacity({
                    op1: 1,
                    op2: 0,
                    op3: 0
                })
            } else if (yt > scrollEnd) {
                setScrolling(false)
                setIsTop(false)
                setStepOpacity({
                    op1: 0,
                    op2: 0,
                    op3: 1
                })
            }

        }
        // document.getElementsByClassName('HowItWorks')

        // if (e.wheelDelta < 0) {
        //     scrollCount++;
        // } else if (e.wheelDelta > 0) {
        //     scrollCount--;
        // }
        // calcOpacity(scrollCount)
    }
    const calcOpacity = (scrollPosT: number, total: number) => {
        let stepLength = total / 4.0
        if (scrollPosT <= stepLength) {
            op1 = (stepLength - scrollPosT) / stepLength;
            op2 = 0;
            op3 = 0;
        } else if (scrollPosT <= stepLength * 2) {
            op2 = (scrollPosT - stepLength) / stepLength;
            op1 = 0;
            op3 = 0;
        } else if (scrollPosT <= stepLength * 3) {
            op2 = (stepLength * 3 - scrollPosT) / stepLength;
            op1 = 0;
            op3 = 0;
        } else if (scrollPosT <= stepLength * 4) {
            op3 = (scrollPosT - stepLength * 3) / stepLength;
            op2 = 0;
            op1 = 0;
        }
        let op1F;
        let op2F ;
        let op3F;
        if (op1 > 0.7) {
            op1F = 1
        } else if (op1 < 0.6 && op1>0) {
            op1F =  0.6
        }else{
            op1F = op1;
        }
        if (op2 > 0.7) {
            op2F = 1
        } else if (op2 < 0.6 && op2>0) {
            op2F =  0.6
        }else{
            op2F = op2;
        }
        if (op3 > 0.7) {
            op3F = 1
        } else if (op3 < 0.6 && op3>0) {
            op3F =  0.6
        }else{
            op3F = op3;
        }
        setStepOpacity({
            op1: op1F,
            op2: op2F,
            op3: op3F
        })
    }


    useEffect(() => {
        window.addEventListener('scroll', scrollCallback);
        return () => window.removeEventListener('scroll', scrollCallback);
    }, []);

    return [stepOpacity, isTop, scrolling, containerRef];
};
