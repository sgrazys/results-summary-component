import './Abilities.css';
import Ability from './Ability';
import Button from './Button';

function Abilities({ data }) {
	return (
		<section className='abilities container'>
			<header className='headline'>
				<h2>Summary</h2>
			</header>

			<main className='main'>
				<ul className='abilities'>
					{data.map((ability) => (
						<Ability
							key={ability.category}
							color={ability.color}
							name={ability.category}
							icon={ability.icon}
							score={ability.score}
						/>
					))}
				</ul>

				<Button name={'Continue'} />
			</main>
		</section>
	);
}

export default Abilities;
