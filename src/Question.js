import React from 'react'
import { Avatar } from '@material-ui/core'
import './Question.css'

function Question() {
    return (
        <div className="question">
            <div className="add_question">
            <div className="add_question__tagline">
            <Avatar />
            <p className="question__name">Chirag Agrawal</p>
            </div>
            <p> Ask your Question</p>
            </div>
            <div className="question_box">
            <div className="add_question__tagline">
                <Avatar />
                <p className="question__name"> Name </p>
            </div>
                <p>Time</p>
                <p>Answer</p>
            </div>
            <div className="question_box">
            <div className="add_question__tagline">
                <Avatar />
                <p className="question__name"> Name </p>
            </div>
                <p>Time</p>
                <p>Answer</p>
            </div>
            <div className="question_box">
            <div className="add_question__tagline">
                <Avatar />
                <p className="question__name"> Name </p>
            </div>
                <p>Time</p>
                <p>Answer</p>
            </div>
            <div className="question_box">
            <div className="add_question__tagline">
                <Avatar />
                <p className="question__name"> Name </p>
            </div>
                <p>Time</p>
                <p>Answer</p>
            </div>
            <div className="question_box">
            <div className="add_question__tagline">
                <Avatar />
                <p className="question__name"> Name </p>
            </div>
                <p>Time</p>
                <p>Answer</p>
            </div>
            <div className="question_box">
            <div className="add_question__tagline">
                <Avatar />
                <p className="question__name"> Name </p>
            </div>
                <p>Time</p>
                <p>Answer</p>
            </div>
            
        </div>
    )
}

export default Question
