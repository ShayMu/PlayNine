import React from 'react';

const Numbers = (props) => {

    const getClassName = (number) => {
        return 'number-display ' + ((props.selectedNumbers.indexOf(number) >= 0) ? 'selected' : '');
    };

    return (
        <div className="card text-center">
            <div>
                {Numbers.numbersList.map(value =>
                    <span key={value} className={getClassName(value)}> { value }</span>)}
            </div>
        </div>
    );
};

Numbers.numbersList = Array.from(Array(9), (e, i) => i + 1);

export default Numbers;