import React from 'react';
import Stars from './stars';
import AnswerSection from './answerSection';
import CheckAnswerBtn from './checkAnswerBtn';
import Numbers from './numbers';

class Game extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            numOfStars: this.calculateNewNumOfStars(),
            usedNumbers: [],
            selectedNumbers: [],
            isCorrectAnswer: null
        };
    }

    calculateNewNumOfStars() {
        return 1 + Math.floor(Math.random() * 9);
    }

    selectNumber = (number) => {
        this.setState((prevState) => ({
            selectedNumbers: prevState.selectedNumbers.concat(number),
            isCorrectAnswer: null
        }));

    };

    unselectNumber = (number) => {
        this.setState((prevState) => ({
            selectedNumbers: prevState.selectedNumbers.filter((value) => value !== number),
            isCorrectAnswer: null
        }));
    };

    checkAnswer = () => {
        this.setState((prevState) => {

            let isCorrect = prevState.numOfStars === prevState.selectedNumbers.reduce((sum, value) => sum + value, 0);
            if (isCorrect)
                this.acceptAnswer();

            return ({ isCorrectAnswer: isCorrect });
        });
    };

    acceptAnswer = () => {
        this.setState((prevState) => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            numOfStars: this.calculateNewNumOfStars()
        }));
    };

    render() {
        const { selectedNumbers, numOfStars, isCorrectAnswer, usedNumbers } = this.state;

        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numOfStars={numOfStars} />
                    <CheckAnswerBtn
                        selectedNumbers={selectedNumbers}
                        handleCheckAnswer={this.checkAnswer}
                        isCorrectAnswer={isCorrectAnswer} />
                    <AnswerSection
                        selectedNumbers={selectedNumbers}
                        handleUnselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers
                    selectedNumbers={selectedNumbers}
                    selectNumberFunc={this.selectNumber}
                    usedNumbers={usedNumbers} />
            </div>
        )
    }
};

export default Game;