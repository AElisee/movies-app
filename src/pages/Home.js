import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("code");
  const [topFlop, setTopFlop] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d2f4018d1f3f0d9be14b37b40cf7171a&query=${search}&language=fr-FR`
      )
      .then((res) => setMovies(res.data.results));
  }, [search]);

  console.log(movies);

  return (
    <div className="home">
      <Header />
      <Navigation />
      <div className="feactures">
        <div className="container">
          <div className="search-container">
            <input
              type="text"
              id="search"
              placeholder="Entrez le nom d'un film"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span>
              <img src="./assets/icons/search.svg" alt="search" />
            </span>
          </div>
          <fieldset className="sort-container">
            <div className="top" onClick={() => setTopFlop("top")}>
              <input type="radio" name="ordered" id="top" value="top" />
              <label htmlFor="top">Plus ↑</label>
            </div>
            <span>&#11088;</span>
            <div className="flop" onClick={() => setTopFlop("flop")}>
              <input type="radio" name="ordered" id="flop" value="flop" />
              <label htmlFor="flop">↓ Moins</label>
            </div>
          </fieldset>
        </div>
      </div>
      <ul className="movie-display">
        {movies.length !== 0
          ? movies
              .sort((a, b) => {
                if (topFlop === "flop") {
                  return a.vote_average - b.vote_average;
                } else if (topFlop === "top") {
                  return b.vote_average - a.vote_average;
                }
              })
              .map((movie) => <Card key={movie.id} movie={movie} />)
          : "Aucun film trouvé !"}
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
