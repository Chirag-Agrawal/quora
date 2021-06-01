import React, {useState, useEffect }from 'react'
import { Avatar } from '@material-ui/core'
import './Question.css'

function Question({userId}) {
        console.log(userId)
        const [que, setQue] = useState([]);

        const fetchQuestions = () => {
            fetch('http://localhost:3000/getques' , {
                method: 'post',
                Headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: userId
                })
            })
                .then(response => response.json())
                .then((question) => {
                    console.log(question)
                }
                )
            
        }

        useEffect(() => {
            fetchQuestions()
        }, [])

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
