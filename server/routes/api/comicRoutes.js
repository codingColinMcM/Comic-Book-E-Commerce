const router = require('express').Router();
const upload = require("../../utils/upload");
const {
    getAllComics,
    addComic
} = require('../../controllers/comicController');

// /api/comics
router.route('/all')
    .get(getAllComics);

router.route("/upload")
    .post(upload.single("file"), addComic)
module.exports = router;