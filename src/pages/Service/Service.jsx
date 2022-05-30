import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {AutoPodbor} from "../../components/AutoPodbor/AutoPodbor";
import {FormBlock} from "../../components/FormBlock";
import blackServiceRec from "../../assets/images/waves/blackServiceRec.png";
import {getService} from "../../api/serviceAPI";
import {WaveWrapper} from "../../components/wavesWrapper";
import {BreadcrumbsLayout} from "../../layout/breadcrumbsLayout";


export const Service = () => {
    const {id} = useParams()
    const nav = useNavigate()


    const [serviceData, setServiceData] = useState()

    useEffect(() => {
        (async () => {
            await getService(id).then(setServiceData).catch(() => {
                nav("/not-found");
            })
        })()
    }, [id])

    return (
        <BreadcrumbsLayout text={serviceData?.title || ""}>
            <main>
                {serviceData && <AutoPodbor service={serviceData}/>}
                <WaveWrapper src={blackServiceRec} alt={"blackServiceRec"}>
                    <FormBlock/>
                </WaveWrapper>
            </main>
        </BreadcrumbsLayout>
    );
};

