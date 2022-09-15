import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Favoris = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.favoritesmovies
      ? window.localStorage.favoritesmovies.split(",")
      : [];
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=d2f4018d1f3f0d9be14b37b40cf7171a&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="favoris">
      <Header />
      <Navigation />
      <h2>
        Coups de coeur <span>💖</span>
      </h2>
      <div className="results">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h3>Aucun coup de coeur pour le moment</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favoris;
