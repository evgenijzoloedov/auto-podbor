import React from 'react';
import {Breadcrumbs} from "../../components/UI/breadcrumbs";

export const BreadcrumbsLayout = ({children,text}) => {

    return (
        <>
            <Breadcrumbs text={text}/>
            {children}
        </>
    );
};

