// Application
// -- Header
// -- Team
// 	--Counter
// -- Team
// 	--Counter

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	);
}

function Team(props){
	return(
		<div className="team">
			<div className="team-name">Columbus</div>
			<div className="counter">
				<button className="minus">-</button>
				<div className="team-score">0</div>
				<button className="plus">+</button>
			</div>
		</div>
	);
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
				
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
	// Pass our title as an attribute. It will come through to the component as props.
	<Application title="MLS Semi-Final Scoreboard" />,
	document.getElementById('root')
);