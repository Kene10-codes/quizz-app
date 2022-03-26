import './App.css';

function App() {
  // const [questions, setQuestions] = use
  //  const ApiUrl = "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium"
  return (
    <main className='quiz--container'>
        <h1 className='quiz--title'>Quizzical</h1>
        <p className='quiz--text'>Test your knowledge by clicking the button below to answer some questions.</p>
        <button className='quiz--start'>Start quiz</button>
    </main>
  );
}

export default App;
