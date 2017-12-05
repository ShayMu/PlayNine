import React from 'react';

const Numbers = (props) => {
    return (
        <div className="card text-center">
            <div>
                <span className="number-display">1</span>
                <span className="number-display selected">2</span>
                <span className="number-display used">3</span>
            </div>
        </div>
    );
};

export default Numbers;