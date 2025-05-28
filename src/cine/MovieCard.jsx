import React, { useState, useContext } from "react";
import { getImageUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { movieContext } from "../context";
import  Swal  from "sweetalert2";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cardData, setCardData } = useContext(movieContext);

  // modal close btn
  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  // modal show pop up
  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  // add to card
  function handleAddToCard(movie) {
    const found = cardData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      setCardData([...cardData, movie]);
      Swal.fire({
        title: "Movie Added",
        text: `${movie.title} add to your card  Successfully `,
        icon: "success",
      });
    } else {
     Swal.fire("  Already added");
    }
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      <div className="  flex flex-col p-2  border-2 border-neutral-500/45 rounded-md">
        <div>
          {" "}
          <button onClick={() => handleMovieSelection(movie)}>
            {" "}
            <img
              className="object-cover"
              src={getImageUrl(movie.cover)}
              alt={movie.title}
            />
          </button>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold ">{movie.title}</h3>
          <p className="text-[14px] mt-1 ">{movie.genre}</p>

          <div className="flex flex-col">
            <Rating value={movie.rating} />

            <div className=" mt-2 w-full flex items-center justify-center p-2 bg-[#06d6a0] ">
              <button onClick={() => handleAddToCard(movie)}>
                Tk {movie.price} | Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
