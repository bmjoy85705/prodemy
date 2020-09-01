import React from 'react';

import './App.css';
import Header from './Component/Header/Header';

import Coursecart from './Component/Coursecart/Coursecart';
import Courses from './Component/Courses/Courses';
import {fakeData} from './fakeData/fakeData'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  
  const [coursesName,setCourseName] = useState([])
  let [courseCart,setcoursecart] =useState([])
  const courseAdded = (course)=>{
    const newCart = [...courseCart,course]
    setcoursecart(newCart)
    console.log(courseCart);
  }

  useEffect(()=>{
   setCourseName(fakeData)
  },[])
  
  return (
    <div className='main-part'>
      <div className='header-part'>
       <Header></Header>
       {
         coursesName.map((course)=>  <Courses courseAdded={courseAdded} key={course.id} course={course}></Courses>)
       }
     </div>
     <div className='cart-part'>
       
         <Coursecart courseDetails={courseCart}></Coursecart>
         
       
    </div>
    </div>
   
  );
}

export default App;
