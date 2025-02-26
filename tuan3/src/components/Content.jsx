// component content
import React from 'react';
import NoResult from './NoResult';
import filter from '../assets/filter.jpg';
const Content = () => {
    return (
        <>
        <div className='content'>
            <div className='filter'>
                <img style={{ width: '70%', paddingLeft: '20px' }} src={filter}></img>
            </div>
            <div className='no-result'>
                <NoResult search="React" />
            </div>
        </div>
        </>
    );
}

export default Content;