import React from 'react';
import {SimpleHeader, } from '@app/components/header';
import {BasicCard} from '@app/components/cards';

function ColorsPage() {
    return (
        <div>
            <SimpleHeader>Colors</SimpleHeader>
            <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.</p>
            <div className="row">
                <div className="col-lg-4">
                    <BasicCard classHeader="Custom Text Color Utilities<">
                        <p className="text-gray-100 p-3 bg-dark m-0">.text-gray-100</p>
                        <p className="text-gray-200 p-3 bg-dark m-0">.text-gray-200</p>
                        <p className="text-gray-300 p-3 bg-dark m-0">.text-gray-300</p>
                        <p className="text-gray-400 p-3 bg-dark m-0">.text-gray-400</p>
                        <p className="text-gray-500 p-3 m-0">.text-gray-500</p>
                        <p className="text-gray-600 p-3 m-0">.text-gray-600</p>
                        <p className="text-gray-700 p-3 m-0">.text-gray-700</p>
                        <p className="text-gray-800 p-3 m-0">.text-gray-800</p>
                        <p className="text-gray-900 p-3 m-0">.text-gray-900</p>
                    </BasicCard>

                    <BasicCard cardHeader="Custom Font Size Utilities">
                        <p className="text-xs">.text-xs</p>
                        <p className="text-lg mb-0">.text-lg</p>
                    </BasicCard>
                </div>

                <div className="col-lg-4">
                    <BasicCard cardHeader="Custom Background Gradient Utilities">
                        <div className="px-3 py-5 bg-gradient-primary text-white">.bg-gradient-primary</div>
                        <div className="px-3 py-5 bg-gradient-secondary text-white">.bg-gradient-secondary</div>
                        <div className="px-3 py-5 bg-gradient-success text-white">.bg-gradient-success</div>
                        <div className="px-3 py-5 bg-gradient-info text-white">.bg-gradient-info</div>
                        <div className="px-3 py-5 bg-gradient-warning text-white">.bg-gradient-warning</div>
                        <div className="px-3 py-5 bg-gradient-danger text-white">.bg-gradient-danger</div>
                        <div className="px-3 py-5 bg-gradient-light text-white">.bg-gradient-light</div>
                        <div className="px-3 py-5 bg-gradient-dark text-white">.bg-gradient-dark</div>
                    </BasicCard>
                </div>

                <div className="col-lg-4">
                    <BasicCard cardHeader="Custom Grayscale Background Utilities">
                        <div className="p-3 bg-gray-100">.bg-gray-100</div>
                        <div className="p-3 bg-gray-200">.bg-gray-200</div>
                        <div className="p-3 bg-gray-300">.bg-gray-300</div>
                        <div className="p-3 bg-gray-400">.bg-gray-400</div>
                        <div className="p-3 bg-gray-500 text-white">.bg-gray-500</div>
                        <div className="p-3 bg-gray-600 text-white">.bg-gray-600</div>
                        <div className="p-3 bg-gray-700 text-white">.bg-gray-700</div>
                        <div className="p-3 bg-gray-800 text-white">.bg-gray-800</div>
                        <div className="p-3 bg-gray-900 text-white">.bg-gray-900</div>
                    </BasicCard>
                </div>
            </div>
        </div>
    );
}

export default ColorsPage;
