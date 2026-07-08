import './App.css'

function App() {

  let currentNumber = 0;

  function increaseNumber() {
    currentNumber++;
  }

  function buttonClicked() {
    alert(currentNumber);
    increaseNumber();
  }

  return (
    <>
      <h1 id="page-title">Exploring the Cosmos</h1>
      <p id="story-text">Space exploration has always captured the human imagination, driving us to look beyond our own planet and wonder what lies across the stars. From the early days of stargazing to modern satellite missions and deep-space telescopes, every discovery brings us closer to understanding the origins of the universe. As technology advances, the possibility of sending humans to distant planets becomes less of a sci-fi dream and more of an upcoming reality.</p>

      <button id="main-button" onClick={buttonClicked}>Click me!</button>
    </>
  )
}

export default App
