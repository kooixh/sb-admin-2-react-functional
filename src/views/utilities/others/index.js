import React from 'react';
import {SimpleHeader} from '@app/components/header';
import {BasicCard} from '@app/components/cards';

function OthersPage() {
    return (
        <div>
            <SimpleHeader>Other Utilities</SimpleHeader>
            <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.
            </p>

            <div className="row">
                <div className="col-lg-6">
                    <BasicCard cardHeader="Overflow Hidden Utilty">
                        Use <code>.o-hidden</code> to set the overflow property of any element to hidden.
                    </BasicCard>

                    <BasicCard cardHeader="Progress Small Utility">
                        <div className="mb-1 small">Normal Progress Bar</div>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                                 aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                        <div className="mb-1 small">Small Progress Bar</div>
                        <div className="progress progress-sm mb-2">
                            <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                                 aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                        Use the <code>.progress-sm</code> class along with <code>.progress</code>
                    </BasicCard>

                    <BasicCard cardHeader="Dropdown - No Arrow">
                        <div className="dropdown no-arrow mb-4">
                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                Dropdown (no arrow)
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/#">Action</a>
                                <a className="dropdown-item" href="/#">Another action</a>
                                <a className="dropdown-item" href="/#">Something else here</a>
                            </div>
                        </div>
                        Add the <code>.no-arrow</code> class alongside the <code>.dropdown</code>
                    </BasicCard>
                </div>

                <div className="col-lg-6">
                    <BasicCard cardHeader="Rotation Utilities">
                        <div className="text-center">
                            <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
                                .rotate-15
                            </div>
                            <hr/>
                            <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
                                .rotate-n-15
                            </div>
                        </div>
                    </BasicCard>
                </div>
            </div>
        </div>
    );
}

export default OthersPage;
