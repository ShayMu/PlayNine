import React from 'react';

const Stars = (props) => {
    return (
        <div className="col-5">
            {Array.from(Array(props.numOfStars), (e, i) => i + 1).map((i) =>
                <i key={i} className="fa fa-star"></i>)}
        </div>
    );
};

export default Stars;