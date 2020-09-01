import React from 'react';
import {Button} from 'react-bootstrap';
import './Coursecart.css'

const Coursecart = (props) => {
    
    let total= 0;
    for (let i =0;i<props.courseDetails.length;i++){
        total += props.courseDetails[i].price
    }
    
    return (
        <div>
            <h1 className="course-summury">Course Summury</h1>
            <h4>Course added: {props.courseDetails.length}</h4>
            <p>Total Price:{total}</p>
            <Button variant="success">Buy now</Button>
        </div>
    );
};

export default Coursecart;