import './Results.css';

function Results({ score }) {
	return (
		<header className='header'>
			<h1>Your Result</h1>
			<div className='circle'>
				<p className='result'>{score}</p>
				<p>of 100</p>
			</div>

			<h2 className='summary'>Great</h2>
			<p className='feedback'>You scored higher than 65% of the people who have taken these tests.</p>
		</header>
	);
}

export default Results;
