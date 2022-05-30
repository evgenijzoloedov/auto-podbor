import React from 'react';

export const AnimateWrapper = ({animate, children}) => {
    return (
        <div
            // data-aos={animate}
        >
            {children}
        </div>
    );
};

