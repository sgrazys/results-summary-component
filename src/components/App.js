import { useState } from 'react';
import initialData from '../data/data.json';
import SummaryComponent from './SummaryComponent';
import Results from './Results';

function App() {
	const [data, setData] = useState(initialData);

	console.log(data);

	const score = Math.floor(data.reduce((prev, cur) => prev + cur.score, 0) / data.length);

	return (
		<SummaryComponent>
			<Results score={score} />
			<h2>HELLO</h2>
		</SummaryComponent>
	);
}

export default App;
