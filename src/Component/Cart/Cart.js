import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Enrolled from '../Enrolled/Enrolled';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    const totalCost= cart.reduce((totalCost,course) => totalCost + course.price, 0);
    return (
        <div>
            <div className="cart-info">
                <h1>Your <span><FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon></span> Detail</h1>
                <p>Total Courses: <span className="total-course">{cart.length}</span></p>
                <p>Total Cost: $ <span>{totalCost.toFixed(2)}</span></p>
            </div>
           <div className='cart-item'>
               {
                   cart.map(ct => <Enrolled cart={ct}></Enrolled>)
               }
           </div>
        </div>
    );
};

export default Cart;