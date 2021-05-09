import axios from "axios"

const apiKey = `974888f7`;

export default {

    searchTitle: (movie) => {
        return axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
    }

}
