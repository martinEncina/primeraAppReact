import '../styles/App.css';
import Home from './Home';
import Boton from './Boton';
import imagen from "../images/a.jpeg"

function App() {
  const student = ["Cristina", "Juan", "Martin"," Juampablo", "Victor","Emma","Mar"]
  
  const name = "Martin";
  return ( 
    <div className="App">
      <h1>Esta es mi primera web</h1>
      <p>
        Lorem dsfsdfsdf dfdfdfd dfdfded cvvcvc vvv c der fgfgg sdfsdfsdfsdfds dsfsdfsdfdsfdsfds dsfsdfdsfdsfds sdfsdfdsfdsfds dsfsdfdsfds        
      </p>

      <Boton estilo="naranja" texto="reset"/>
      
      {name}

      <Home saludo ="hello">
        <p>lorem</p> 
        <h6>bla bla bla</h6>
      </Home>

      <img src={imagen}alt="" className="imgHome"/>

      <ul> 
        {student.map((eachStudent, i) => (
        <li key={i}>{eachStudent}</li>
        ))}
      </ul>
    </div>
    
    // /map
  );
}

export default App;
