
import React, { useState } from 'react';
import Select from 'react-select';

import bgimage from '../../../assets/images/background/bg1.jpg';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const CitySelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);
   
   
    return (
        <>
            <div className="call-action style-1 content-inner-1">
                <div className="container">
                    <div className="inner-action overlay-primary-dark" style={{ backgroundImage: "url(" + bgimage + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                        <div className="row inner-content justify-content-center">
                            <div className="col-xl-6 col-lg-9">
                                <div className="section-head text-center">
                                    <h2 className="title text-white">Search Events in Different Cites</h2>
                                </div>
                                <div className="mb-5">
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CitySelect;