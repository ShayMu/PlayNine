import React from 'react';

const Numbers = (props) => {
    return (
        <div className="card text-center">
            <div>
                {Numbers.numbersList.map(i =>
                    <span key={i} className="number-display">{i}</span>)}
            </div>
        </div>
    );
};

Numbers.numbersList = Array.from(Array(9), (e, i) => i + 1);

export default Numbers;