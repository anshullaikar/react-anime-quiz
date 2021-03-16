import React, {useState} from 'react';
import {fetchQuizQuestions, Question} from "./API"
import QuestionCard from "./components/QuestionCard"

//Types
import {QuestionState, Difficulty} from "./API"
//Styles
import {GlobalStyle, Wrapper} from "./App.styles"

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10

function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0)
    setNumber(0)
    setLoading(false)
    setUserAnswers([])
  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      //user answer
      const answer = e.currentTarget.value;
      //check answer with correct value
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) setScore(prev => prev + 1)
      // save answer in array for user answers
      const AnswerObject = {
        question: questions[number].question,
        answer, 
        correct, 
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, AnswerObject])


    }
  }
  
  const nextQuestion = () => {
    //move on to the next question
    const nextQuestion = number + 1
    if (nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    }
    else{
      setNumber(nextQuestion)
    }
  }

  return (
    <>
    <GlobalStyle/>
    <div className= "center-items">
      <Wrapper className="">
        <div className= "header-bg"> 
          <h1>ANIME QUIZ</h1>
        </div>
      {
      gameOver ? (
      <button className = "start" onClick={startTrivia}>
        Start
      </button>
      ): null}
      {
      userAnswers.length == TOTAL_QUESTIONS ? (
      <button className = "start" onClick={startTrivia}>
        Start Again
      </button>
      ): null}
      {!gameOver ? (<p className="score">Score: {score}</p>) : null}
      {loading && (<p>Loading Questions...</p>)}
      {!loading && !gameOver &&
      (<QuestionCard 
      questionNr = {number+1} 
      totalQuestions = {TOTAL_QUESTIONS} 
      question = {questions[number].question} 
      answers = {questions[number].answers} 
      userAnswer = {userAnswers ? userAnswers[number] : undefined} 
      callback = {checkAnswer}
      />)}
      {!loading && !gameOver && userAnswers.length == number + 1 && number !== TOTAL_QUESTIONS - 1 &&
      (<button className= "next" onClick= {nextQuestion}>Next Question</button>)}
    </Wrapper>
    </div>
    </>
  );
}

export default App;
