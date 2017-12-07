import React from 'react';

const CheckAnswerButton = (props) => {

    let button;

    switch (props.isCorrectAnswer) {
        case true:
            button = (
                <button className="btn btn-lg btn-success">
                    <i className="fa fa-check"></i>
                </button>
            );
            break;

        case false:
            button = (
                <button className="btn btn-lg btn-danger">
                    <i className="fa fa-times"></i>
                </button>
            );
            break;

        default:
            button = (<button
                className="btn btn-lg btn-primary"
                disabled={props.selectedNumbers.length === 0}
                onClick={props.handleCheckAnswer}>=</button>);
            break;
    }


    return (
        <div className="col-2">
            {button}
        </div>
    );
};

export default CheckAnswerButton;