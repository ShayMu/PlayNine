import React from 'react';
import Stars from './stars';
import AnswerSection from './answerSection';
import CheckAnswerBtn from './checkAnswerBtn';
import Numbers from './numbers';
import DoneFrame from './doneFrame';
import Timer from './timer';

class Game extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.initialState();

        setInterval(this.updateTimer, 1000);
    }

    initialState = () => {
        return {
            numOfStars: Game.calculateNewNumOfStars(),
            usedNumbers: [],
            selectedNumbers: [],
            isCorrectAnswer: null,
            redrawCount: 5,
            doneStatus: null,
            timeLeft: 60
        };
    };

    resetGame = () => {
        this.setState(this.initialState());
    };

    static calculateNewNumOfStars() {
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

    handleRedraw = () => {
        this.setState((prevState) => ({
            redrawCount: prevState.redrawCount - 1,
            numOfStars: Game.calculateNewNumOfStars(),
            selectedNumbers: []
        }), this.updateDoneStatus);
    };

    acceptAnswer = () => {
        this.setState((prevState) => {
            return ({
                usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
                selectedNumbers: [],
                numOfStars: Game.calculateNewNumOfStars()
            })
        }, this.updateDoneStatus);
    };

    updateDoneStatus = () => {

        this.setState((prevState) => {
            let doneStatus = null;
            if (prevState.usedNumbers.length === 9)
                doneStatus = "Done. Nice!";
            else if (prevState.redrawCount === 0 && !this.hasPossibleSolution(prevState))
                doneStatus = "Game Over!";

            return ({
                doneStatus: doneStatus
            });
        });
    };

    updateTimer = () => {

        this.setState((prevState) => {

            if (prevState.doneStatus === null) {
                if (prevState.timeLeft > 0)
                    return { timeLeft: prevState.timeLeft - 1 };
                else
                    return { doneStatus: "Time is Up!" };
            }
        });
    };

    hasPossibleSolution = ({ numOfStars, usedNumbers }) => {
        const currNumbers = Array.from(Array(9), (e, i) => i + 1).filter((num) => usedNumbers.indexOf(num) === -1);

        return this.possibleCombinationSum(currNumbers, numOfStars);
    };

    possibleCombinationSum = (arr, n) => {
        if (arr.indexOf(n) >= 0) { return true; }
        if (arr[0] > n) { return false; }
        if (arr[arr.length - 1] > n) {
            arr.pop();
            return this.possibleCombinationSum(arr, n);
        }
        var listSize = arr.length, combinationsCount = (1 << listSize)
        for (var i = 1; i < combinationsCount; i++) {
            var combinationSum = 0;
            for (var j = 0; j < listSize; j++) {
                if (i & (1 << j)) { combinationSum += arr[j]; }
            }
            if (n === combinationSum) { return true; }
        }
        return false;
    };

    render() {
        const { selectedNumbers, numOfStars, isCorrectAnswer, usedNumbers, redrawCount, doneStatus, timeLeft } = this.state;

        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <Timer timeLeft={timeLeft} />
                <br />
                <div className="row">
                    <Stars numOfStars={numOfStars} />
                    <CheckAnswerBtn
                        selectedNumbers={selectedNumbers}
                        handleCheckAnswer={this.checkAnswer}
                        isCorrectAnswer={isCorrectAnswer}
                        handleRedraw={this.handleRedraw}
                        redrawCount={redrawCount} />
                    <AnswerSection
                        selectedNumbers={selectedNumbers}
                        handleUnselectNumber={this.unselectNumber} />
                </div>
                <br />
                {doneStatus ?
                    <DoneFrame headline={doneStatus} resetGame={this.resetGame} /> :
                    <Numbers
                        selectedNumbers={selectedNumbers}
                        selectNumberFunc={this.selectNumber}
                        usedNumbers={usedNumbers} />}
            </div>
        )
    }
};

export default Game;