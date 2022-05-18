import React from 'react';
import '../style-sheets/Player.css';

function Player(props) {
	return (
		<div className='container'>
			<img className='img-player' src={require(`../img/player-${props.img}.jpg`)} alt='Jugador Erico' />
			<div className='contenedor-texto-player'>
				<p className='nombre-player'><strong>{props.nombre}</strong> - Ha marcado {props.goles} goles</p>
				<p className='nacionalidad-debut'>{props.nacionalidad} - Debút {props.debut}</p>
				<p className='wikipedia'>{props.wiki}</p>
			</div>
		</div>
		)
}

export default Player;

