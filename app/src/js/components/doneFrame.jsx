import React from 'react';

const DoneFrame = (props) => {

    return (
        <div className="col-12 text-center">
            <h1>{props.headline}</h1>
            <button className="btn btn-secondary" onClick={props.resetGame}>Play Again!</button>
        </div>);

};

export default DoneFrame;