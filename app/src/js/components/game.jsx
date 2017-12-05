import React from 'react';
import Stars from './stars';
import AnswerSection from './answerSection';
import CheckAnswerBtn from './checkAnswerBtn';
import Numbers from './numbers';

const Game = (props) => {

    return (
        <div className="container">
            <h3>Play Nine</h3>
            <hr />
                <div className="row">
                    <Stars />
                    <CheckAnswerBtn />
                    <AnswerSection />
                </div>
            <br />
            <Numbers />
        </div>
    );
};

export default Game;