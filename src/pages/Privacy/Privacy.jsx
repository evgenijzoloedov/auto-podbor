import React from 'react';
import {PrivacyPolicy} from "../../components/privacyPolicy";
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";

export const Privacy = () => {
    return (
        <BreadcrumbsLayout text={"Защита персональных данных"}>
            <main>
                <PrivacyPolicy/>
            </main>
        </BreadcrumbsLayout>
    );
};

