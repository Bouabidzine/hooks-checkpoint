
import './App.css';
import Filter from './Component/Filter';
import MovieCard from './Component/MovieCard';
import MovieList from './Component/MovieList';
import React, {useState} from 'react';
import Add from './Component/AddMovie';


  const App = () => {
    const [movies, setMovies] = useState([
      {
        id: 1,
        title: "MAYDAY",
        description: "MAYDAY Film action américain de Massimiliano Cerchi",
        rating: 2,
        Type: "movie",
        poster: "https://fr.web.img4.acsta.net/pictures/22/10/26/10/19/0944904.jpg",
      },
      {
        id: 2,
        title: "BABYLON",
        description: "BABYLON (BABYLON - 2023) - Damien Chazelle, Brad Pitt",
        rating: 8,
        Type: "movie",
        poster:
          "https://www.mauvais-genres.com/39758-large_default/babylon-affiche-de-film-120x160-cm-2023-brad-pitt-damien-chazelle.jpg",
      },
      {
        id: 3,
        title: "César 2023",
        description:
          "César 2023 : Vous avez raté la cérémonie ? On vous résume le palmarès",
        rating: 4.9,
        Type: "movie",
        poster:
          "https://bullesdeculture.com/bdc-content/uploads/2023/02/cesar-2023-affiche.jpg",
      },
      {
        id: 4,
        title: "THE OLD WAY",
        description:
          "Directed by:Brett Donowho Starring: Nicolas Cage Ryan Kiera Armstrong Clint Howard Abraham Benrubi Shiloh Fernandez",
        rating: 3.2,
        Type: "movie",
        poster:
          "https://c8.alamy.com/compfr/2ky36yh/the-old-way-affiche-americaine-haut-nicolas-cage-2023-saban-films-courtesy-everett-collection-2ky36yh.jpg",
      },
      {
        id: 5,
        title: "Knock at the Cabin",
        description: "Le films horreur le plus attendus de 2023",
        rating: 1.9,
        Type: "movie",
        poster:
          "https://static.fnac-static.com/multimedia/Images/FD/Comete/164666/CCP_IMG_ORIGINAL/2184847.jpg",
      },
      {
        id: 6,
        title: "Equalizer 3",
        description:
          "Troisième opus de la saga d action menée par Antoine Fuqua et Denzel Washington. Sortie le 30 août 2023.",
        rating: 3.5,
        Type: "movie",
        poster: "https://www.evous.fr/IMG/evenementon16110.jpg?1670598162",
      },
      {
        id: 7,
        title: "Alibi.com 2",
        description:
          "Après avoir fermé son agence Alibi.com et promis à Flo qu il ne lui mentirait plus jamais, la nouvelle vie de Greg est devenue tranquille, trop tranquille",
        rating: 4,
        Type: "movie",
        poster: "https://www.evous.fr/IMG/evenementon15392.jpg?1670579208",
      },
      {
        id: 8,
        title: "Creed 3",
        description:
          "acteur Michael B Jordan reprend son rôle et passe en même temps derrière la caméra.",
        rating: 2.4,
        Type: "movie",
        poster: "https://www.evous.fr/IMG/evenementon16097.jpg?1670591547",
      },
      {
        id: 9,
        title: "Super Mario Bros : Le film !",
        description:
          "Un film animation basé sur les aventures du petit héro à la casquette rouge et qui passe sa vie à sauver la princesse Peach.",
        rating: 3.8,
        Type: "movie",
        poster: "https://www.evous.fr/IMG/evenementon15397.jpg?1676911055",
      },
      {
        id: 10,
        title: "Les Gardiens de la Galaxie 3",
        description:
          "tar Lord et sa bande continuent d écumer la galaxie. Notre bande de marginaux favorite a néanmoins quelque peu changé. Peter Quill, qui pleure toujours la perte de Gamora, doit rassembler son équipe pour défendre l’univers et protéger l’un des siens. En cas d’échec, cette mission pourrait bien marquer la fin des Gardiens tels que nous les connaissons...",
        rating: 3.1,
        Type: "movie",
        poster: "https://www.evous.fr/IMG/evenementon16102.jpg?1678212087",
      },
    ]);
    
    const [bytitle, setBytitle] = useState("");
    const [byRating, setByRating] = useState(0);
    const add= (newMovie) => {
      setMovies([...movies, newMovie])
    };
  
  return (
    <div className="App">
    <Filter setBytitle={setBytitle} setByRating={setByRating} />
    <Add bytitle={bytitle} byRating={byRating} setMovies={setMovies}/>
    <MovieCard movies={movies}/>
    <MovieList movies={movies} Add={add} />
   
    </div>
  );
}

export default App;
