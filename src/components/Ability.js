import './Ability.css';

function Ability({ color, name, icon, score }) {
	return (
		<li
			className='ability'
			style={{ backgroundColor: `${color}1a` }}>
			<img
				src={icon}
				alt='Ability-icon'
			/>
			<p
				className='ability-name'
				style={{ color: color }}>
				{name}
			</p>
			<p className='abbility-score'>
				<strong>{score}</strong> <span>/100</span>
			</p>
		</li>
	);
}

export default Ability;
