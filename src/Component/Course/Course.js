import React from 'react';
import './Course.css'

const Course = (props) => {
   console.log(props)
    const {img,name,author,price} = props.course;
    const enrolled = props.Enrolled;
    return (
        <div className='course-style'>
            <img src={img}></img>
            <div>
            <h1>{name}</h1>
                <h5>Instructor: {author}</h5>
                <p>price: ${price}</p>
                <button className='button' onClick={()=>enrolled(props.course)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;