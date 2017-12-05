import React from 'react';

const AnswerSection = (props) => {

    return (
        <div className="col-5">
            {props.selectedNumbers.map((value, idx) =>
                <span key={idx} className="number-display">{value}</span>
            )}
        </div>
    );
};

export default AnswerSection;