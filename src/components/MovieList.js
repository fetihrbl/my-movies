import React from "react";

const MovieList = (props) => {

        return (
            <div className="row">

                {props.movies.map((movie) => (
                  
                    <div className="col-lg-4" key={movie.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="sample movie" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between aling-items-center">
                                    <button type="button" onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">DELETE</button>
                                    <h2><span className="badge bg-info">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        )
    
}

export default MovieList;
