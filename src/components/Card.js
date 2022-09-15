import React from "react";

const Card = ({ movie }) => {
  const formatDate = (date) => {
    return date.split("-").reverse().join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.favoritesmovies
      ? window.localStorage.favoritesmovies.split(",")
      : [];

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id);
      window.localStorage.favoritesmovies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.favoritesmovies.split(",");
    let newData = storedData.filter((id) => id != movie.id);

    window.localStorage.favoritesmovies = newData;
  };

  return (
    <li className="card">
      <div className="card-container">
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
              : "./assets/img/poster.jpg"
          }
          alt={`affiche ${movie.title}`}
        />
        <h3>{movie.title}</h3>
        {movie.release_date ? (
          <p>sorti le {formatDate(movie.release_date)}</p>
        ) : null}
        <h3>
          <span>{movie.vote_average.toFixed(1)} / 10</span> &#11088;
        </h3>
        <ul className="genre">
          {movie.genre_ids
            ? genreFinder()
            : movie.genres.map((genre) => <li>{genre.name}</li>)}
        </ul>
        {/* {movie.overview ? <h3>Synopsis</h3> : null}
        {movie.overview ? <p className="overview">{movie.overview}</p> : null} */}
        {movie.genre_ids ? (
          <button onClick={() => addStorage()}>
            <span>
              <img src="./assets/icons/heart-plus.svg" alt="" />{" "}
              <em>Ajouter aux favoris</em>
            </span>
          </button>
        ) : (
          <button
            onClick={() => {
              deleteStorage();
              window.location.reload();
              console.log("delete");
            }}
          >
            <span>
              <img src="./assets/icons/heart-minus.svg" alt="" />{" "}
              <em> Retirer des favoris</em>
            </span>
          </button>
        )}
      </div>
    </li>
  );
};

export default Card;
