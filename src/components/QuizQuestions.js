import { useEffect, useState } from 'react';

export default function QuizQuestions() {
  const [getQuestions, setAllQuestions] = useState([])
  // const [getQuestion, setQuestion] = useState({
  //   correct_answer: "",
  //   question: "What is your name",
  // })
  const [errors, setError] = useState("")
  

  const ApiUrl = "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium"
  
  useEffect(() => {
    fetch(ApiUrl)
       .then(response => response.json())
       .then(data => setAllQuestions(data.results))
       .catch(error => error ? setError(errors) : error)
  }, []) 


   const question = getQuestions.map(obj => <p>{obj.question}</p>)

    return (
        <>
          {question}
        </>
    )
}