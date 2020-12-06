import React from 'react';

const Enrolled = (props) => {
    const {img,name,author,price} = props.cart;
    return (
        <div className="enrolled-body">
        <img src={img} alt=""/>
        <div className='enrolled-info'>
            <h1>{name}</h1>
            <div className="enrolled-detail">
                <p>By: <small>{author}</small></p>
                <h4>Price $ <span className="total-cost">{price}</span></h4>
            </div>
        </div>
    </div>
    );
};

export default Enrolled;