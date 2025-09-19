const Album = require("../models/Album");
const path = require("path");
const fs = require("fs");

const getAlbumForm = (req, res, next) => {
  res.render("create", {
    error: req.flash("error"),
  });
};

const createAlbum = async (req, res, next) => {
  try {
    if (!req.body.titre) {
      req.flash("error", "Le titre ne doit pas etre vide");
      res.redirect("/albums/create");
      return;
    }

    await Album.create({ titre: req.body.titre });
    res.status(200).redirect("/albums");
  } catch (err) {
    req.flash("error", "Erreur lors de la création de l'album");
    res.redirect("/albums/create");
  }
};

const getAllAlbums = async (req, res, next) => {
  const albums = await Album.find();
  res.render("home", { albums: albums });
};

const deleteOneAlbum = async (req, res, next) => {
  const id = req.params.idAlbum;
  const folderPath = path.join(__dirname, "../public/uploads", id);
  try {
    if (fs.existsSync(folderPath)) {
      fs.rmdirSync(folderPath, { recursive: true });
    }
    await Album.findByIdAndDelete(id);
    res.redirect("/albums");
  } catch (err) {
    console.log(err);
    res.redirect("/albums");
  }
};

const getOneAlbum = async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.id);
    res.render("album", { album: album, error: req.flash("error") });
  } catch (err) {
    req.flash("error", "album non trouvé");
    res.render("album", { album: "", error: req.flash("error") });
  }
};

const addImage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const album = await Album.findById(id);

    if (!req?.files?.image) {
      req.flash("error", "aucun fichier mis en ligne");
      res.redirect(`/albums/${id}`);
      return;
    }
    const name = req.files.image.name;
    if (album.images.includes(name)) {
      req.flash("error", "nom de fichier deja utilisé");
      res.redirect(`/albums/${id}`);
      return;
    }
    album.images.push(name);
    const folderPath = path.join(__dirname, "../public/uploads", id);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    const localPath = path.join(folderPath, name);
    await req.files.image.mv(localPath);
    await album.save();
    res.redirect(`/albums/${id}`);
  } catch (err) {
    console.log(err);
    res.send("impossible d'ajouter l'image");
  }
};

const deleteImage = async (req, res, next) => {
  const idAlbum = req.params.idAlbum;
  const idImage = req.params.idImage;
  try {
    const album = await Album.findById(idAlbum);
    if (!album) {
      req.flash("error", "album introuvable");
      res.redirect("/albums");
      return;
    }
    const image = album.images[idImage];
    if (!image) {
      req.flash("error", "image introuvable");
      res.redirect(`/albums/${idAlbum}`);
      return;
    }
    console.log(image);

    const localPath = path.join(__dirname, "../public/uploads", idAlbum, image);
    fs.unlink(localPath, (err) => {
      if (err) {
        req.flash("err", "erreur lors de la suppression de l'image");
        res.redirect(`/albums/${idAlbum}`);
        return;
      }
      console.log(`${image} was deleted`);
    });
    album.images.splice(idImage, 1);
    await album.save();
    res.redirect(`/albums/${idAlbum}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/albums`);
  }
};

module.exports = {
  addImage,
  deleteImage,
  getAlbumForm,
  createAlbum,
  getAllAlbums,
  deleteOneAlbum,
  getOneAlbum,
};
