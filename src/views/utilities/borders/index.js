import React from 'react';
import {SimpleHeader} from '@app/components/header';
import {SingleCard} from '@app/components/cards';

function BordersPage() {
    return (
        <div>
            <SimpleHeader>Border Utilities</SimpleHeader>
            <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.
            </p>

            <div className="row">
                <div className="col-lg-6">
                    <SingleCard status="primary" border="left">.border-left-primary</SingleCard>
                    <SingleCard status="secondary" border="left">.border-left-secondary</SingleCard>
                    <SingleCard status="success" border="left">.border-left-success</SingleCard>
                    <SingleCard status="info" border="left">.border-left-info</SingleCard>
                    <SingleCard status="warning" border="left">.border-left-warning</SingleCard>
                    <SingleCard status="danger" border="left">.border-left-danger</SingleCard>
                    <SingleCard status="dark" border="left">.border-left-dark</SingleCard>
                </div>

                <div className="col-lg-6">
                    <SingleCard status="primary" border="bottom">.border-bottom-primary</SingleCard>
                    <SingleCard status="secondary" border="bottom">.border-bottom-secondary</SingleCard>
                    <SingleCard status="success" border="bottom">.border-bottom-success</SingleCard>
                    <SingleCard status="info" border="bottom">.border-bottom-info</SingleCard>
                    <SingleCard status="warning" border="bottom">.border-bottom-warning</SingleCard>
                    <SingleCard status="danger" border="bottom">.border-bottom-danger</SingleCard>
                    <SingleCard status="dark" border="bottom">.border-bottom-dark</SingleCard>
                </div>
            </div>
        </div>
    )
}

export default BordersPage;
