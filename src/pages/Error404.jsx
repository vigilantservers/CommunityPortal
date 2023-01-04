// error 404 page which uses the error 40 component

import React from 'react';
import { Link } from 'react-router-dom';
import {Error404} from '../components/';

const Err404Page = () => {
    return (
        <Error404/>
    );
};

export default Err404Page;