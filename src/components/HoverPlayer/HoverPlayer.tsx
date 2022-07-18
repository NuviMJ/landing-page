import React, {useEffect, useRef, useState} from 'react';

interface Props {

    url: string;


}

const HoverPlayer = (prop: Props) => {
    const ref: any = useRef(null);
    const [focus, setFocus] = useState(false);

    const loop = () => {
        ref.current?.play();
    };

    const pauseLoop = () => {
        ref.current?.pause();
    };
    const mutedToggle = () => {
        if (ref.current.muted) {
            ref.current.muted = false;
        } else {
            ref.current.muted = true;
        }

    };

    const onEndedLoop = () => {
        if (focus) loop(); // when ended check if its focused then loop
    };

    useEffect(() => {
        if (focus) loop(); // when focused then loop
        if (!focus) pauseLoop(); // when not focused then pause loop
    }, [focus]);

    return (
        <video
            id="video"
            ref={ref}
            style={{width: "100%"}}
            autoPlay
            onMouseOver={() => setFocus(true)}
            onMouseOut={() => setFocus(false)}
            muted={true}
            src={prop.url}
            onEnded={onEndedLoop}

            onClick={() => mutedToggle()}
        ></video>
    );
};

export default HoverPlayer;
