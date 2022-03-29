import { useEffect, useState } from 'react';

export default function QuizQuestions() {
  const [getQuestions, setAllQuestions] = useState([])
  const [respondAnswers, setRespondAnswers] = useState([])
  // const [getQuestion, setQuestion] = useState({
  //   correct_answer: "",
  //   question: "What is your name",
  // })
  const [errors, setError] = useState("")
  

  const ApiUrl = "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium"
  
  useEffect(() => {
    fetch(ApiUrl)
       .then(response => response.json())
       .then(data => {
        setAllQuestions(data.results)
        setRespondAnswers(data.results)
       })
       .catch(error => error ? setError(errors) : error)
  }, []) 


   const question = getQuestions.map(obj => (
     <div className='quiz--wrapper'>
       <p className='quiz--question'>{obj.question}</p>
       <div className='quiz--answers'>
          <button className='quiz--btn'>{obj.correct_answer}</button>
          {obj.incorrect_answers.map( el => (
                <button className='quiz--btn'>{el}</button>
          ))}
       </div>
     </div>
   ))
  //  const answer = respondAnswers.map(obj => <button className='quiz--btn'>{obj.correct_answer}</button>)

    return (
        <div className="question--container">
          {question}
          <button className='check--answerBtn'>Check Anwers</button>
          {/* {answer} */}
        </div>
    )
}