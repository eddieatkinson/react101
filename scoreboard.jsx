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
			<div className="team-name">{props.name}</div>
			<div className="counter">
				<button className="minus">-</button>
				<div className="team-score">{props.score}</div>
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
				<Team name="Columbus" score="0" />
				<Team name="Toronto" score="0" />
			</div>
		</div>
	);
};

ReactDOM.render(
	// Pass our title as an attribute. It will come through to the component as props.
	<Application title="MLS Semi-Final Scoreboard" />,
	document.getElementById('root')
);