import './App.css';
import './components/Nav'
/* import Heading from './components/Heading';
import Card from './components/Card';
import Btn from './components/Btn';
 */
/* function App() {
  return (
    <div className="App">
     <Heading firstName="Bob" />
     <Heading firstName="Daniel" >
      <p>Buenas tardes</p>
      </Heading>

     <Card h2="First card's h2" h3="First card's h3" />
     <Card  h2="Second card's h2" h3="Second card's h3" />
     <Card h2="Third card's h2" h3="Third card's h3"/>

     <Btn />
     </div>
  );
} */

function handleClick() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  let userInput = prompt('type a number'); 
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
}

function App() {
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>
            Guess the number between 1 and 3
        </button>
    </div>
  );
}

export default App;
