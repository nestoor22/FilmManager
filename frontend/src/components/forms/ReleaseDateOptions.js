import React from 'react'
import Select from 'react-select'

let years = [];

for(let i=1920; i<=2020;i++){
    years.push({value: i, label: i})
}


function ReleaseDate(){
    return(
        <Select
            isMulti
            name="years"
            options={years}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select years..."
        />
    );
}

export default ReleaseDate;