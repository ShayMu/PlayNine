import React from 'react';

const RedrawButton = (props) => {
    return (
        <div className="col-12 text-center">
            <button className="btn btn-warning" disabled={props.redrawCount <= 0} onClick={props.handleRedraw}>
                {props.redrawCount} <i className="fa fa-refresh"></i>
            </button>
        </div>);
};

export default RedrawButton;