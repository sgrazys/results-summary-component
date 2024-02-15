import './Results.css';

function Results({ score }) {
	return (
		<header className='header'>
			<h1>Your Result</h1>
			<div className='circle'>
				<p className='result'>
					{score} <span>of 100</span>
				</p>
			</div>

			<h2 className='summary'>Great</h2>
			<p className='feedback'></p>
		</header>
	);
}

export default Results;
