import { useEffect, useState } from 'react';
import QuizQuestions from './components/QuizQuestions';
import './App.css';

function App() {
  const [viewQuestions, setViewQuestions] = useState(true)

  function toggleViewQuestions() {
    setViewQuestions(prev => !prev)
  }
  return (
    <main className='quiz--container'>
       {
         viewQuestions  ?
          <div className='quiz--header'>
            <h1 className='quiz--title'>Quizzical</h1>
            <p className='quiz--text'>Test your knowledge by clicking the button below to answer some questions.</p>
            <button onClick={toggleViewQuestions} className='quiz--start'>Start quiz</button>
          </div> 
         :
         <QuizQuestions />
       }
    </main>
  );
}

export default App;
