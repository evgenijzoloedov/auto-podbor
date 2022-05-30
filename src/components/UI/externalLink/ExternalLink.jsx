import React from 'react';

export const ExternalLink = ({href, children, ...props}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer noopener" {...props}>
            {children}
        </a>
    );
};

