import React from 'react';


class Numbers extends React.Component {
    numbersList = Array.from(Array(9), (e, i) => i + 1);

    constructor(props) {
        super(props);
    }


    getClassName = (number) => {
        return 'number-display ' + ((this.props.selectedNumbers.indexOf(number) >= 0) ? 'selected' : '');
    };

    handleNumberClick = (event) => {
        let number = parseInt(event.target.innerHTML);
        if (this.props.selectedNumbers.indexOf(number) < 0)
            this.props.selectNumberFunc(number);
    };

    render() {
        return (
            <div className="card text-center">
                <div>
                    {this.numbersList.map(value =>
                        <span key={value}
                            className={this.getClassName(value)}
                            onClick={this.handleNumberClick}> {value}</span>)}
                </div>
            </div>
        );
    }
};

export default Numbers;