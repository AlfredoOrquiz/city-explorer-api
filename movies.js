const axios = require(`axios`);

let getMovies = async (request, response, next) => {
  try {
    let title = request.query.title;
    let urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${title}`
    let movieObj = await axios.get(urlMovies);
    let selectedMovies = movieObj.data.results.map(movie => new Movie(movie));
    response.send(selectedMovies);
  } catch(err) {
    next(err)
  }
};

class Movie {
  constructor(movie) {
    this.image = movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : '';
    this.overview = movie.overview;
    this.title = movie.title;
  }
}

module.exports = getMovies;
