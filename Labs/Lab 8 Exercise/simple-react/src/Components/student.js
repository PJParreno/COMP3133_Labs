import React from 'react';
import Courses from './courses'

const Student = props => {
    return (
    <p> Student <b>{props.name}</b> name with <b>{props.number}</b><br />
    <Courses enrolled={props.enrolled}/>
    </p>
    
    );
};
 
export default Student;