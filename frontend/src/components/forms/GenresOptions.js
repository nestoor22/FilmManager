import React from 'react'
import Select from 'react-select'

const options = [
    { value: 1, label: 'Comedy' }, { value: 2, label: 'Fantastic' }, { value: 3, label: 'Thriller' },
    { value: 4, label: 'Drama' }, { value: 5, label: 'Melodrama' }, { value: 6, label: 'Horrors' },
    { value: 7, label: 'Action movie' }, { value: 8, label: 'History' }, { value: 9, label: 'Biography' },
    { value: 10, label: 'Sport' }, { value: 11, label: 'Fantasy' }, { value: 12, label: 'Adventures' },
    { value: 13, label: 'Family' }, { value: 14, label: 'Crime' }, { value: 15, label: 'Detective' },
    { value: 17, label: 'Military' }, { value: 18, label: 'Cartoon' }, { value: 19, label: 'Short film' },
    { value: 20, label: 'Musical' }, { value: 21, label: 'Childish' }, { value: 22, label: 'Music' },
    { value: 24, label: 'Anime' }, { value: 25, label: 'Documentary' }, { value: 26, label: 'Western' },
    { value: 27, label: 'TV-show' }, { value: 28, label: 'Film noir' }, { value: 30, label: 'Game' },
    { value: 31, label: 'News' }, { value: 32, label: 'Adult' }, { value: 33, label: 'Concert' }
];

function Genres(){
    return(
        <Select
            isMulti
            name="genres"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select genres..."
        />
);
}

export default Genres;