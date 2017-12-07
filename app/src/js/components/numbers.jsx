import React from 'react';


const Numbers = (props) => {

    const getClassName = (number) => {
        return ('number-display ' +
            ((props.selectedNumbers.indexOf(number) >= 0) ? 'selected' : '') +
            ((props.usedNumbers.indexOf(number) >= 0) ? 'used' : ''));
    };

    const handleNumberClick = (event) => {
        let number = parseInt(event.target.innerHTML, 10);
        if (props.selectedNumbers.indexOf(number) < 0 &&
            props.usedNumbers.indexOf(number) < 0)
            props.selectNumberFunc(number);
    };

    return (
        <div className="card text-center">
            <div>
                {Numbers.numbersList.map(value =>
                    <span key={value}
                        className={getClassName(value)}
                        onClick={handleNumberClick}> {value}</span>)}
            </div>
        </div>
    );

};

Numbers.numbersList = Array.from(Array(9), (e, i) => i + 1);
export default Numbers;