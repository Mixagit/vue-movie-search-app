class MovieController {
    async getAll(req, res) {
        res.status(200).json("get all...");
    }

    async getOne(req, res) {
        res.status(200).json("get one...");
    }
}

export default new MovieController();
