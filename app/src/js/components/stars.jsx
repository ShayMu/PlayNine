import React from 'react';

const Stars = (props) => {
    const numOfStars = 1 + Math.floor(Math.random() * 9);

    return (
        <div className="col-5">
            {Array.from(Array(numOfStars)).map(i =>
                <i key={i} className="fa fa-star"></i>)}
        </div>
    );
};

export default Stars;