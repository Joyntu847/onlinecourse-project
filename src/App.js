import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import CourseData from './CourseData/CourseData';
import { useState } from 'react';
import Course from './Component/Course/Course';
import Cart from './Component/Cart/Cart';

function App() {
  const [data,setData] = useState(CourseData);
  const [cart,setCart] = useState([]);

  const enrolled = (course) =>{
    const newCart = [...cart, course]
      setCart(newCart)
  }
  //console.log(cart)
  return (
    <div className='main-contaier'>
       <Header></Header>
       <div className='container'>
         <div className='courses'>
           {
             data.map(course => <Course course={course} Enrolled={enrolled}></Course>)
           }
         </div>
         <div className='cart'>
           <Cart cart={cart}></Cart>
         </div>
       </div>
    </div>
  );
}

export default App;
