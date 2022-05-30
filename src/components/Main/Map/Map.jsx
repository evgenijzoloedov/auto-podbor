import React, {useEffect, useRef} from 'react';


export const Maps = () => {
    const map = useRef(null)

    // useEffect(()=>{
    //     console.log(map.current)
    //     map?.current.behaviors.disable('scrollZoom')
    // },[map])

    return (
        <>
            <div style={{
                position:"relative",
                zIndex:101
            }}>
                <iframe ref={map}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A5c1db9ed53326cfdfd929e5b111b16c925dd19910b6bb0ceeda3b6ff9dca9dae&amp;source=constructor"
                    width="100%" height="450" frameBorder="0"/>
            </div>
        </>
    );
};

