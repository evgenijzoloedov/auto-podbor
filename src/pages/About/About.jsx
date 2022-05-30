import React from 'react';
import {MainAbout} from "../../components/About/mainAbout";
import {Cards} from "../../components/About/cards";
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";

export const About = () => {
    return (
        <BreadcrumbsLayout text={"О компании"}>
            <main>
                <MainAbout/>
                <Cards/>
            </main>
        </BreadcrumbsLayout>
    );
};

