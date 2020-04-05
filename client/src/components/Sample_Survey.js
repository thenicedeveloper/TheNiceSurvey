import React from 'react';



let Sample_Survey = () => {


    return (
        <div className="row border border-0 justify-content-around mt-4">
            <h4 className="col-sm-12 m-4">Sample Survey</h4>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body m-2">
                        <h5 className="card-title">Questions Format 1</h5>                        
                        <p className="text-muted">Questions on top, check boxes on the bottom:</p>                             
                        <div className="text-left">
                            <p className="lead mb-1">What is your favorite fruit?</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Apples</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Bananas</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Kiwi</label>
                            </div>                 
                        </div> 
                    </div> {/*Card-Body*/}
                </div> {/*Card*/}
            </div>
            {/*---------------------------------------Questions Format 2 */}
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body m-2">
                        <h5 className="card-title">Questions Format 2</h5>                        
                        <p className="text-muted">Questions on top, check boxes bottom stocked:</p>                             
                        <div className="text-left">
                            <p className="lead mb-1">What is your favorite fruit?</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Apples</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Bananas</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Kiwi</label>
                            </div>                 
                        </div> 
                    </div> {/*Card-Body*/}
                </div> {/*Card*/}
            </div>
        </div>
    )
}

export default Sample_Survey;