import './App.css';
import './components/Nav'
import Heading from './components/Heading';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
     <Heading firstName="Bob" />
     <Heading firstName="Daniel" >
      <p>Buenas tardes</p>
      </Heading>

     <Card h2="First card's h2" h3="First card's h3" />
     <Card  h2="Second card's h2" h3="Second card's h3" />
     <Card h2="Third card's h2" h3="Third card's h3"/>
     </div>
  );
}

export default App;
