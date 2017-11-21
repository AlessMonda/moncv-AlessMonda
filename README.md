# CV - Alessandro Mondaini
    643-1.1 Projet de technologies WEB de présentation
    Haute-Ecole de gestion Arc
    2017-2018
> Réalisation d'une page web présentant mon CV


## Programmes utilisés
- Visual Studio Code
- Gimp
- GitHub Desktop
- Google Chrome
- Firefox
- Microsoft Edge

## Technologies utilisés
- HTML
- CSS
- Javascript
- jQuery (Smooth Scroll / Chart.js / GoTop)
- Bootstrap
- Node.js
- Git
- Webpack

# Mise en place de l'environnement et des technologies
## Installation de l'IDE et du logiciel de versioning
1. Installer Visual Studio Code
2. Installer Git
## Création du projet et configuration
1. Télécharger et installer [Node.js](https://nodejs.org/en/)
> npm install -g vue-cli
2. Création d'un nouveau projet (avec le template webpack)
> vue init webpack moncv
3. Installation des dépendances
> npm install
4. Démarrer le serveur de développement
> npm run dev
5. Désinstallation de dépendance qui ne nous sont pas utiles pour le projet
> npm uninstall vue --save
6. Bootstrap
* Installation de Bootstrap
> npm install bootstrap-css-only@3 --save
> npm install bootstrap.native --save
* Modifier le fichier src/main.js en ajoutant :
``` bash
import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
```
7. Configurer le fichier .eslintrc.js (eslint permet de vérifier la bonne mise en forme du code)
``` bash
{
  ...,
  "rules": {
    // enforce semi
    "semi":  ["error", "always"],
    // use 4 spaces indent
    "indent": ["error", 4],
    // make rule equal vs code auto formatting
    "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never"
    }],
    ...
  },
  ...
}
```
8. Configurer le fichier .editorconfig
``` bash
indent_size = 4
```
9. Modifier le fichier build/webpack.dev.conf en modifiant la ligne
``` bash
devtool: 'source-map',
```
10. Créer le fichier .gitattributes
``` bash
# Force all line endings to be \n
* text eol=lf

############################################################
# git can corrupt binary files if they're not set to binary.
############################################################

# Apple office documents are actually folders, so treat them as binary.
*.numbers binary
*.pages binary
*.keynote binary

# Image files
*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
*.webp binary
*.ico binary

# Movie and audio files
*.mov binary
*.mp4 binary
*.mp3 binary
*.flv binary
*.ogg binary

# Compression formats
*.gz binary
*.bz2 binary
*.7z binary
*.zip binary

# Web fonts
*.ttf binary
*.eot binary
*.woff binary
*.otf binary

# Other
*.fla binary
*.swf binary
*.pdf binary

############################################################
# End binary settings
############################################################
```
11. Fichier CSS
* Création d'un fichier src/main.css
* Modifier le fichier src/main.js en y ajoutant après les import bootstrap :
``` bash
import './main.css';
```
## Serveur de développement
* Démarrage du serveur de développement (permet de voir en "live" les modifications effectuées)
> npm run dev

* Stopper le serveur de développement
> CTRL+C

## Déploiement du projet sur GitHub (git doit avoir été installer au préalable)
1. Création d'un compte sur github.com et Installer [GitHub Desktop](https://desktop.github.com/)
2. Création des fichiers minifiés 
> npm run build
3. Installation d'un plugin qui effectue un commit et push dans la bonne branche
> npm install push-dir --save-dev
4. Modifier le fichier package.json en y ajoutant :
``` bash
{
...,
  "scripts": {
    ...,
    "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup --verbose"
  },
...
}
```
5. Effecuter le déploiement
> npm run deploy
6. Visiter le site
http://usernameABC.github.io/repositoryXYZ

## Installation de jQuery
1. Installation du package
> npm install jquery
2. Modifier les fichiers build/webpack.dev.conf et build/webpack.prod.conf.js
``` bash
...
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
...
```
3. Modification du fichier .eslintrc.js (pour que le $ ne soit pas reconnu comme erreur de sytaxe)
``` bash
...
globals: {
    $: false
},
...
```

## Installation de plugin jQuery
### Smooth Scroll (défilement fluide entre les liens de la page)
1. Installation du package
> npm install jquery-smooth-scroll --save
2. Modifier le fichier src/main.js
``` bash
import 'jquery-smooth-scroll';

$(document).ready(() => {
  $('a').smoothScroll();
});
```
### Chart.js (création de graphiques)
1. Installation du package
> npm install chart.js --save
2. Modifier le fichier src/main.js en y ajoutant :
``` bash
import Chart from 'chart.js';
```
3. Exemple pour modifier toutes les progresse bar en chart
``` bash
$('.progress').each((index, element) => {
        let value = $(element.children).attr('aria-valuenow');
        let remainingValue = $(element.children).attr('aria-valuemax') - value;
        $(element).replaceWith('<canvas id="chart-' + index + '"></canvas>');

        let ctx = $('#chart-' + index);

            //eslint-disable-next-line
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [
                        {
                            backgroundColor: ['#3e95cd', '#FFFFFF'],
                            data: [value, remainingValue]
                        }
                    ]
                },
                options: {
                    tooltips: {
                        enabled: false
                    }
                }
            });
    });
```
### GoTop (Ajoute un icône de flèche permettant de scroll jusqu'en haut de la page)
1. Installation du package
> npm install jquery-gotop --save
2. Modifier le fichier src/main.js en y ajoutant : 
``` bash
import 'jquery-gotop';
```
3. Modifier le fichier index.html en y ajoutant :
``` bash
...
<body>
    ...
    <div id='goTop'></div>
<body>
...
```
4. Exemple de configuration (src/main.js)
``` bash
    $('#goTop').goTop({
        'place': 'right',
        'marginY': '3',
        'marginX': '3'
    });
```

# Commande de Git
* Initialisation de git
> git init

* Cloner un projet
git clone nom_projet

* Ajouter les fichiers modifiés dans le stage
> git add .

* Commiter le stage avec un message
> git commit -m 'mon message'

* Envoi des commits sur le dépôt distant
> git push

* Téléchargement des commits depuis le dépôt distant
> git pull