import React, {useEffect, useRef, useState} from 'react';

interface Props {
    start: number;
    end: number;
    duration: number; //ms
    run: boolean; //ms
trigger:any;
}

const Counter = (props: Props) => {


    // const [count, setCount] = useState(props.start)
    //
    //
    // let num = props.start
    //
    // const countUp = () => {
    //     if (num <= count)
    //         ++num
    //     setCount(num)
    // }
    //
    // const observer = new IntersectionObserver((el) => {
    //     if (el[0].isIntersecting) {
    //         const interval = setInterval(() => {
    //             (num < props.end) ? countUp() : clearInterval(interval)
    //         }, props.duration)
    //     }
    // }, {threshold: [0]})
    //
    // observer.observe(props.trigger )
    //
    // return   count ;
};


// label of counter
// number to increment to
// duration of count in seconds

//
// // number displayed by component
// const [count, setCount] = useState(props.start)
//
// useEffect(() => {
//
//     // first three numbers from props
//     const end = props.end
//     // if zero, return
//     if (props.start === end) return;
//     if (props.run) {
//         // find duration per increment
//         let totalMilSecDur = props.duration;
//         let incrementTime = (totalMilSecDur / end) * 1000;
//
//         // timer increments start counter
//         // then updates count
//         // ends if start reaches end
//         let timer = setInterval(() => {
//
//             setCount((prevState) => {
//                 if (prevState + 1 === end) clearInterval(timer)
//                 return prevState + 1
//             })
//
//         }, incrementTime);
//     }
//     // dependency array
// }, [props.run]);
//
// return (
//
//     <> {count}</>
//
// );
// }
// ;

export default Counter;
