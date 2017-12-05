import React from 'react';

const CheckAnswerButton = (props) => {
    return (
        <div className="col-2">
            <button className="btn" disabled={props.selectedNumbers.length === 0}>=</button>
        </div>
    );
};

export default CheckAnswerButton;