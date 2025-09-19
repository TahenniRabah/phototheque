# 📸 Photothèque

Application web de gestion et de visualisation de photos, développée avec **Node.js**, **Express**, **EJS**, **MongoDB** et **Tailwind CSS**.  
La photothèque permet de **créer différents albums**, d’y **ajouter des photos**, et de les consulter sous forme de galerie..

------------------------------------------------------------------------

## 🚀 Installation

1.  **Cloner le projet**

    ``` bash
    git clone https://github.com/TahenniRabah/phototheque.git
    cd phototheque
    ```

2.  **Installer les dépendances**

    ``` bash
    npm install
    ```

------------------------------------------------------------------------

## ⚙️ Lancement du projet

1.  **Démarrer MongoDB**

    ``` bash
    mongod
    ```

2.  **Compiler TailwindCSS**

    ``` bash
    npm run build:css
    ```

3.  **Lancer le serveur avec Nodemon**

    ``` bash
    npx nodemon
    ```

    ou si tu l'as installé globalement :

    ``` bash
    nodemon
    ```

------------------------------------------------------------------------

## 📂 Fonctionnalités principales

 -  📁 **Créer et gérer plusieurs albums** (par exemple : Vacances, Famille, Travail)
 -  📤 **Uploader des photos** dans un album choisi
 -  🖼️ **Afficher les photos** de chaque album sous forme de galerie
 -  🗑️ **supprimer** un album ou une photo

------------------------------------------------------------------------

## ✅ Scripts disponibles

-   `npm run build:css` → Compile les fichiers Tailwind\
-   `npm run start` → Lance le serveur avec Nodemon

------------------------------------------------------------------------

## 📌 Stack utilisée

-   **Node.js** + **Express** → backend et serveur web\
-   **EJS** → moteur de templates côté serveur\
-   **MongoDB** → base de données pour stocker les infos des photos\
-   **Tailwind CSS** → styliser la galerie

------------------------------------------------------------------------

## 🖥️ Utilisation

Une fois le serveur lancé, ouvre ton navigateur sur :\
👉 `http://localhost:3000`
