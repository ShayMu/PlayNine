import React from 'react';
import Stars from './stars';
import AnswerSection from './answerSection';
import CheckAnswerBtn from './checkAnswerBtn';
import Numbers from './numbers';

class Game extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedNumbers: []
        };
    }
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <CheckAnswerBtn />
                    <AnswerSection selectedNumbers={this.state.selectedNumbers} />
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers} />
            </div>
        )
    }
};

export default Game;