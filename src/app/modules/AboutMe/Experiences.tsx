import CardComponent from '@app/components/Card/CardComponent'
import { companyExperience } from '@app/configs/data/biodata'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function Experiences() {
    const data = companyExperience()
    const { t } = useTranslation()
    return (
        <Row>
            {data?.map((item: any, index: number) =>
                <Col key={index} md={6} sm={12}>
                    <CardComponent className='shadow-sm border-0 mb-2' key={index} title={item?.name} hideHeader={false}>
                        <div className='border-bottom mb-2'>
                            <div>Status</div>
                            <div>{item?.status}</div>
                        </div>
                        <div className=''>
                            <div>{t("Join")}</div>
                            <div>{item?.join}</div>
                        </div>
                    </CardComponent>
                </Col>
            )}

        </Row>
    )
}

export default Experiences
