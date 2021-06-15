import React from 'react';
import {SimpleHeader} from '@app/components/header';
import {BasicCard, SmallCard, DefaultCard, DropdownCard, CollapseCard} from '@app/components/cards';

function CardPage() {
    return (
        <div>
            <SimpleHeader>Cards</SimpleHeader>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <SmallCard cardHeader="Earnings (Monthly)" icon="fas fa-calendar fa-2x text-gray-300"
                               status="border-left-primary" statusText="text-primary">$40,000</SmallCard>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <SmallCard cardHeader="Earnings (Annual)" icon="fas fa-calendar fa-2x text-gray-300"
                               status="border-left-success" statusText="text-success">$215,000</SmallCard>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <SmallCard cardHeader="Tasks" icon="fas fa-clipboard-list fa-2x text-gray-300"
                               status="border-left-info" statusText="text-info" extraConten={
                        <div className="progress-bar bg-info" role="progressbar"
                             style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0"
                             aria-valuemax="100"/>}>50%</SmallCard>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <SmallCard cardHeader="Pending Requests" icon="fas fa-comments fa-2x text-gray-300"
                               status="border-left-warning" statusText="text-warning">18</SmallCard>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-6">
                    <DefaultCard cardHeader="Default Card Example">
                        This card uses Bootstrap's default styling with no utility classes added. Global
                        styles are the only things modifying the look and feel of this default card example.
                    </DefaultCard>

                    <BasicCard cardHeader="Basic Card Example">
                        The styling for this basic card example is created by using default Bootstrap
                        utility classes. By using utility classes, the style of the card component can be
                        easily modified with no need for any custom CSS!
                    </BasicCard>
                </div>

                <div className="col-lg-6">
                    <DropdownCard cardHeader="Revenue Sources" items={[{link: '/action', title: 'Action', type: 'link'},
                        {link: '/action', title: 'Another Action', type: 'link'}, {type: 'divider'},
                        {link: '/action', title: 'Something else', type: 'link'}]} dropdownHeader="Dropdown Header">
                        Dropdown menus can be placed in the card header in order to extend the functionality
                        of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                        icon in the card header can be clicked on in order to toggle a dropdown menu.
                    </DropdownCard>

                    <CollapseCard cardHeader="Collapsable Card Example" collapseId="colExampleCard">
                        This is a collapsable card example using Bootstrap's built in collapse
                        functionality. <strong>Click on the card header</strong> to see the card body
                        collapse and expand!
                    </CollapseCard>
                </div>
            </div>

        </div>
    );
}

export default CardPage;
