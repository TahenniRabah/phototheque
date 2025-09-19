const express = require("express");
const router = express.Router();
const albumController = require("../controllers/album.controller");

router.get("/albums/create", albumController.getAlbumForm);

router.post("/albums/create", albumController.createAlbum);

router.get("/albums", albumController.getAllAlbums);
router.get("/albums/:id", albumController.getOneAlbum);
router.post("/albums/:id", albumController.addImage);

router.get("/albums/:idAlbum/delete", albumController.deleteOneAlbum);
router.get("/albums/:idAlbum/delete/:idImage", albumController.deleteImage);

module.exports = router;
