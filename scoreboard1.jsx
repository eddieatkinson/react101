function Application(){
	return(
		<div className="scoreboard">
			<div className="header">
				<h1>MLS Semi-Final Scoreboard</h1>
			</div>
			<div className="teams">
				<div className="team">
					<div className="team-name">Columbus</div>
					<div className="counter">
						<button className="minus">-</button>
						<div className="team-score">0</div>
						<button className="plus">+</button>
					</div>
				</div>
				<div className="team">
					<div className="team-name">Toronto</div>
					<div className="counter">
						<button className="minus">-</button>
						<div className="team-score">0</div>
						<button className="plus">+</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(
	<Application />,
	document.getElementById('root')
);