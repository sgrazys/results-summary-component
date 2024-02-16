import data from '../data/data.json';
import './App.css';
import SummaryComponent from './SummaryComponent';
import Results from './Results';
import Abilities from './Abilities';

function App() {
	const score = Math.floor(data.reduce((prev, cur) => prev + cur.score, 0) / data.length);

	return (
		<div className='app'>
			<SummaryComponent>
				<Results score={score} />
				<Abilities data={data} />
			</SummaryComponent>
		</div>
	);
}

export default App;
