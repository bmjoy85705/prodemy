import React from 'react';
import './Courses.css'
import {Button} from 'react-bootstrap';

const Courses = (props) => {
    
    const {name,img,instructor,price,description} = props.course;
    return (
        <div className='course-style'>
           <div>
              <h1>{name}</h1>
             <h3>Instructor: {instructor}</h3>
             <p><small>Price: {price}</small></p>
             <p><small>{description}</small></p>
             <Button onClick={()=>props.courseAdded(props.course)} variant="primary">Enroll now</Button>
           </div>
           <div>
           <img src={img} alt=""/>
           </div>
        </div>
    );
};

export default Courses;