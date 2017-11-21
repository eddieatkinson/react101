// A component in React should be uppercase.
function Application(){
	// A React component must return 1, and ONLY 1, DOM element.
	// console.log("Hello, from inside of the Application component!");
	var zachSeat = 1;
	var nikSeat = 16 * 2;

	// A component can pass props to another component inside of it.
	// Props are passed as "HTML attributes" and will be available in the child component.
	return(
		// <h1>Hello, World</h1>
		<div id="parent">
			<div class="sibling">
				<Student name="Jennifer" seat={3} />
				<Student name="Nikolas" seat={nikSeat - 30} />
				<Student name="Zach" seat={zachSeat} />
			</div>
		</div>
	);
};

function Student(props){
	return (
		<li>{props.name} is in seat {props.seat}</li>
	)
}

// ReactDOM is available because we included reactDOM.js
// The .render function needs React (react.js) and it takes 2 args:
// 	1. The component to render.
// 	2. Where to render it.

console.log(React);
console.log(ReactDOM);

ReactDOM.render(
	// <h1>Hello, World</h1>,
	<Application />,
	document.getElementById('container')
);