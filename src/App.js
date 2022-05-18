import './App.css';
import Player from './componentes/Player.js';

function App() {
  return (
    <div className="App">
      <div className="principal-container">
        <h1> Máximos goleadores de la historia de los torneos de primera división del fútbol argentino </h1>
          <Player 
         		nombre='Arsenio Erico'
          	goles='295'
          	nacionalidad='Paraguayo'
          	debut='1947'
         		wiki='Arsenio Pastor Erico Martínez fue un futbolista paraguayo que se destacó en las décadas de 1930 y 1940. Es considerado por la FIFA como el mejor jugador paraguayo de todos los tiempos​ y uno de los mejores futbolistas sudamericanos del siglo XX.​​'
          	img='erico'/>
          <Player
          	nombre='Ángel Labruna'
          	goles='294'
          	nacionalidad='Argentino'
          	debut='1939'
          	wiki='Ángel Amadeo Labruna fue un jugador y director técnico de fútbol argentino. Es considerado como uno de los mejores futbolistas argentinos de la historia. Jugaba como delantero por izquierda.'
          	img='labruna' />
         	<Player
          	nombre='Herminio Masantonio'
          	goles='256'
          	nacionalidad='Argentino'
          	debut='1931'
          	wiki='Herminio Masantonio fue un futbolista argentino. Una de las glorias del Club Atlético Huracán y uno de los máximos goleadores en la historia del fútbol argentino, aunque, paradójicamente, nunca logró consagrarse goleador de un torneo local de AFA.​​'
          	img='masantonio' />
          <Player
          	nombre='Martín Palermo'
          	goles='236'
          	nacionalidad='Argentino'
          	debut='1992'
          	wiki='Martín Palermo es un exfutbolista y actual entrenador argentino. Actualmente dirige a Aldosivi de la Primera División de Argentina. Como jugador, se desempeñaba en la posición de delantero centro, donde llegó a destacarse como uno de los mejores y más icónicos de la historia de Boca Juniors y del fútbol argentino.​​​​'
          	img='palermo' />
          <Player
          	nombre='Manuel Pelegrina'
          	goles='231'
          	nacionalidad='Argentino'
          	debut='1938'
          	wiki='Manuel Gregorio Pelegrina fue un futbolista argentino que se desempeñaba como delantero. Con una prolongada y destacada campaña en Estudiantes de La Plata, es el jugador con mayor cantidad de presencias oficiales en la historia de ese club,su máximo goleador y el cuarto en la era profesional del fútbol argentino, solo superado por Arsenio Erico, Ángel Labruna y Herminio Masantonio.'
          	img='pelegrina' />
      </div>
    </div>
  );
}

export default App; 