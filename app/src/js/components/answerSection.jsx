import React from 'react';

const AnswerSection = (props) => {

    const unselectNumber = (event) => {
        let number = parseInt(event.target.innerHTML, 10);
        props.handleUnselectNumber(number);
    };

    return (
        <div className="col-5">
            {props.selectedNumbers.map((value, idx) =>
                <span key={idx} className="number-display"
                    onClick={unselectNumber} > { value }</span>
            )}
        </div>
    );
};

export default AnswerSection;