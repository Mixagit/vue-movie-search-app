import fs from "fs";

class MovieController {
    async getMovies(req, res) {
        let movies = JSON.parse(fs.readFileSync("./data/kinopoisk-1.json"));
        res.status(200).json(movies.docs);
    }

    async getOne(req, res) {
        res.status(200).json("get one...");
    }
}

export default new MovieController();
