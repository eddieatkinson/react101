function Poster(props){
	return(
		<div className="col-sm-12 col-md-4 col-lg-3">
			<img src={props.image} />
		</div>
	);
}

class Movies extends React.Component{
	constructor(){
		super()
		this.state = {
			moviesToShow: []
		}
	}

	// componentDidMount is special. It is used by React.Component.
	componentDidMount(){
		console.log("Movies was just put into the DOM");
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
		$.getJSON(url, (movieData)=>{
			console.log(movieData);
			var nowPlayingArray = [];
			movieData.results.map((movie)=>{
				nowPlayingArray.push(movie);
			});
			this.setState({
				moviesToShow: nowPlayingArray
			});
		});
	}

	render(){
		const imagePath = "http://image.tmdb.org/t/p/w300";
		var moviesList = [];
		this.state.moviesToShow.map((movie, index)=>{
			var fullImagePath = imagePath + movie.poster_path;
			moviesList.push(<Poster key={index} image={fullImagePath} />)
		});
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-12 text-center">
						<div className="th-wrapper">
							<button className="btn btn-primary">Reset Search</button>
						</div>
						<div className="movie-rows">
							{/* Movies go here! */}
							{moviesList};
						</div>
					</div>
				</div>
			</div>
		)
	}	
}

ReactDOM.render(
	<Movies />,
	document.getElementById('root')
);