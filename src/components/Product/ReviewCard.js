import React, { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import profilePng from '../../Assets/images/Profile.png'



const ReviewCard = ({ review }) => {
    useEffect(()=>{
        console.log('revieww', review)
    })
    const options = {
        edit: false,
        color: 'rgba(20,20,20,0.1)',
        size: window.innerWidth < 600 ? 20 : 25,
        activeColor: 'tomato',
        value: review.rating,
        isHalf: true

    }

    return (
        <>
            <div className='reviewCard'>
                <img src={profilePng} alt='User' />
                <p>{review.name} </p>
                <ReactStars {...options} />
                <span> {review.comment} </span>
            </div>
        </>
    )
}
export default ReviewCard;