import {useEffect} from "react";

function useImperativeDisableScroll( element:any, disabled:any ) {
    useEffect(() => {
        if (!element) {
            return
        }

        element.style.overflowY = disabled ? 'hidden' : 'scroll'

        return () => {
            element.style.overflowY = 'scroll'
        }
    }, [disabled])
}
