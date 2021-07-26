import './App.css';
import star from './assets/star.png'

function App() {

  const handleClick = (star) => {
    alert(star);
  }

  return (
    <div className="app"> 
      <div className="container">

        <p className="title"> Gostou do projeto? </p>
        <p className="message"> Dê um feedback: </p>

        <div className="stars-container">
          <img src={star} alt="star" className="star" onClick={() => handleClick(1)}/>
          <img src={star} alt="star" className="star" onClick={() => handleClick(2)}/>
          <img src={star} alt="star" className="star" onClick={() => handleClick(3)}/>
          <img src={star} alt="star" className="star" onClick={() => handleClick(4)}/>
          <img src={star} alt="star" className="star" onClick={() => handleClick(5)}/>
        </div>

        <div className="submit-container"> 
          <button type="button" className="submit">Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
