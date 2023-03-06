const Comic = require('../models/Comic');

const upload = require("../utils/upload");
const path = require("path");
const multer = require("multer");
const { MulterError } = require("multer");
// const { Op } = require("sequelize");

module.exports = {
    getAllComics(req, res) {
        Comic.find({})
            .then((allComics) => res.json(allComics))
            .catch((err) => res.status(500).json(err));
    },
    addComic(req, res) {
        try {
            // console.log(req.session);
            const newComic = {};
            newComic.title = req.body.title;
            // REMEMBER TO REPLACE WITH req.file.path
            newComic.image = req.body.image.split("/").slice(1).join("/");
            newComic.price = req.body.price;
            newComic.description = req.body.description;
            // REMEMBER TO REPLACE WITH req.session (or whatever jwt has)
            newComic.userName = req.body.userName;
            // newComic.createdAt = req.body.createdAt;
            const comicUpload = Comic.create(newComic);
            console.log(comicUpload);
            // res.redirect("/dashboard");
        } catch (err) {
            if (err instanceof multer.MulterError) {
            res.json(MulterError);
            console.log(MulterError);
            // A Multer error occurred when uploading.
            } else if (err) {
            res.status(400).json(err);
            console.log(err);
            }
        }
    },
}
// THIS WILL BE REPLACED WITH GRAPHQL
//search for comics by user, title, type or keyword
// router.get("/search/:searchterm", async (req, res) => {
//   try {
//     console.log("search term", req.params.searchterm);
//     const dbSearch = await Comic.findAll({
//       where: {
//         [Op.or]: [
//           { artist: { [Op.like]: req.params.searchterm } },
//           { title: { [Op.substring]: req.params.searchterm } },
//           { type: { [Op.like]: req.params.searchterm } },
//           { description: { [Op.substring]: req.params.searchterm } },
//         ],
//       },
//     });

//     const searchResults = dbSearch.map((userArtwork) =>
//       userArtwork.get({ plain: true })
//     );
//     console.log("results", searchResults);
//     res.status(200).json(searchResults);
//     //res.render ("landing", {searchResults});

//     //res.render("landing", { searchdata });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //post route to add new art
// router.post(
//   "/upload",
//   sessionChecker,
//   upload.single("file"),
//   async (req, res) => {
//     try {
//       console.log(req.session);
//       const newComic = {};
//       newComic.title = req.body.title;
//       newComic.description = req.body.description;
//       newComic.type = req.body.type;
//       newComic.image = req.file.path.split("/").slice(1).join("/");
//       newComic.artist = req.session.username;
//       newComic.date_added = req.body.date;
//       const artUpload = await Art.create(newComic);
//       console.log(artUpload);
//       res.redirect("/dashboard");
//     } catch (err) {
//       if (err instanceof multer.MulterError) {
//         res.json(MulterError);
//         console.log(MulterError);
//         // A Multer error occurred when uploading.
//       } else if (err) {
//         res.status(400).json(err);
//         console.log(err);
//       }
//     }
//   }
// );

// //put route to update title and description fields
// router.put("/:id", async (req, res) => {
//   try {
//     var updatedArt = await Comic.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(updatedArt);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //delete route to remove work
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedArt = await Art.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(deletedArt);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });