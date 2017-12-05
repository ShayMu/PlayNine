import React from 'react';
import Stars from './stars';
import AnswerSection from './answerSection';
import CheckAnswerBtn from './checkAnswerBtn';
import Numbers from './numbers';

class Game extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            numOfStars: 1 + Math.floor(Math.random() * 9),
            selectedNumbers: []
        };
    }


    selectNumber = (number) => {
        this.setState((prevState) => ({
            selectedNumbers: prevState.selectedNumbers.concat(number)
        }));

    };

    unselectNumber = (number) => {
        this.setState((prevState) => ({
            selectedNumbers: prevState.selectedNumbers.filter((value) => value !== number)
        }));
    };

    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numOfStars={this.state.numOfStars} />
                    <CheckAnswerBtn />
                    <AnswerSection
                        selectedNumbers={this.state.selectedNumbers}
                        handleUnselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers
                    selectedNumbers={this.state.selectedNumbers}
                    selectNumberFunc={this.selectNumber} />
            </div>
        )
    }
};

export default Game;