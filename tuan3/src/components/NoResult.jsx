// component no result with parameter
import React from 'react';
import noResult from '../assets/no-result.jpg';

const NoResult = ({search}) => {
    return (
        <img style={{ width: '80%' }} src={noResult} alt="no-result" />
    );
}

export default NoResult;