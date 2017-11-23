// DUMB COMPONENT (or PRESENTATIONAL or a PURE FUNCTION) - It doesn't care what the rest of the application
// is doing. It will ALWAYS return the same X, given the same Y.
// SMART or STATEFUL component cares about what's going on at an application level.
// The same X will return a different Y based on the state of the application.

// createClass is a helper method, that allows you to create a "class" in ES5.
// It takes an object, objects have properties.
// The only rule for these properties is it MUST HAVE a render function.
// render ~= document.query('something').html(jkadak)
// ES5 way. You will hardly see it, but you will see it.
// It was awesome. In 2015.
// var CoinFlip = React.createClass({
// 	render: function(){
// 		return(
// 			<h1>Sanity Check!?!</h1>
// 		);
// 	}
// });

// This is a smart component. Dumb components (we will still make them)
// do NOT need the class syntax.

class CoinFlip extends React.Component{
	constructor(props){
		// This is a child class of the React.Component class.
		// We MUST call super to use it.
		super();
		// Nothing special about title. React does not care about it at all.
		this.title = props.title;
		this.coin = [
			props.heads,
			props.tails
		];
		// State IS special. React cares. A lot.
		this.state = {
			image: this.coin[0]
		};
		this.flipCoin = this.flipCoin.bind(this);
	}

	flipCoin(){
		console.log("flipCoin ran!");
		// We NEVER change the state directly.
		// React changes the state.
		// Every time state changes, React will call render
		var coinSide = Math.round(Math.random());
		this.setState({
			image: this.coin[coinSide]
		});
	}

	// The one function we must have in a component is....render
	render(){
		// render MUST return a SINGLE DOM element
		return(
			<div className="coin-flip">
				<h1>{this.title}</h1>
				<div>
					<button onClick={this.flipCoin}>Click to Flip the Coin</button>
					<img src={this.state.image} />
				</div>
			</div>
		)
	}
}

function Index(){
	return(
		<div>
			<CoinFlip title="Flip the coin" heads="coin-head.jpg" tails="coin-tail.jpg" />
			<CoinFlip title="Flip the coin again" heads="buffalo-nickel-heads.jpg" tails="buffalo-nickel-tails.png" />
		</div>	
	)
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
);