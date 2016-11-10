import React from "react";

//polyfill for the fetch() API so that we can use
//it in Safari and older browsers
//this module was already included in our package.json
//so after you execute `npm install` this module will
//be in the node_modules directory, so we can load it
//simply by importing it's module name
import "whatwg-fetch";
<<<<<<< HEAD
import Movie from "./movie.jsx";

const APIKEY = "f7cd0968648d7e6edd7352c72b477266";
=======

const APIKEY = "...your api key...";
>>>>>>> 73a6b4da8b987f7f238e677540702aa562f59d43
const BASE_URL = "https://api.themoviedb.org/3"
const DISCOVER_API = BASE_URL + "/discover/movie?api_key=" + APIKEY;
const GENRES_API = BASE_URL + "/genre/movie/list?api_key=" + APIKEY;

export default class extends React.Component {
    constructor(props) {
        super(props);
        
        //initialize the component state to an empty object
        this.state = {}
    }

<<<<<<< HEAD
    componentDidMount(){
        fetch(DISCOVER_API)
            .then(response => response.json())
            .then(data => this.setState({movies: data}));
    }

    render() {
        var totalPages;
        var movies;

        if(this.state.movies) {
            totalPages = (<p>{this.state.movies.total_pages}
             pages</p>);

            //movies = [];
            //this.state.movies.results.forEach(function(m){
            //    movies.push(<Movie key={m.id} movie={m}/>);
            //});

            //map creats a new array and puts whatever you return in the target array ^ same as above
            //short hand format
            movies = this.state.movies.results.map(m=> <Movie key={m.id} movie={m} />)


            
        }
=======
    render() {
>>>>>>> 73a6b4da8b987f7f238e677540702aa562f59d43
        return (
            <div className="container">
                <h1>Products View</h1>
                <p>some nifty products for sale</p>
<<<<<<< HEAD
                {totalPages}
                {movies}
=======
>>>>>>> 73a6b4da8b987f7f238e677540702aa562f59d43
            </div>
        );
    }
}