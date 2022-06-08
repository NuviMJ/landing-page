import { debounce } from 'lodash';
import {useState, useEffect, useRef} from 'react'

export const useIsTop = () => {


    const [isTop, setIsTop] = useState(true)
    const scrollCallback = () => {
            let scroll = window.scrollY
             if (scroll>0) {
                 setIsTop(false)
             }else{
                 setIsTop(true)
             }

        }





    useEffect(() => {
        window.addEventListener('scroll', scrollCallback );
        return () => window.removeEventListener('scroll', scrollCallback);
    }, []);

    return  isTop ;
};
