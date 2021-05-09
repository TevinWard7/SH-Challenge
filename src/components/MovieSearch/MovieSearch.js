import React from "react";
import API from "../utils/API"

const MovieSearch = () => {

    const [searchQuery, setSearchQuery] = React.useState();
    const [movieTitle, setMovieTitle] = React.useState();
    const [movieYear, setMovieYear] = React.useState();

    const handleSearch = (search) => {

        setSearchQuery(search);

        API.searchTitle(search)
            .then(response => {
                setMovieTitle(response.data.Title);
                setMovieYear(response.data.Year)
            })

    }

    return (
        <>

            <h6>Movie Title</h6>

            <input value={searchQuery} onChange={e => handleSearch(e.target.value)}></input>

        </>
    )

}

export default MovieSearch;