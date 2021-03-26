/* SLIDER DEBUT */
const tabImageDefilante = ["img/photo-defile.jpeg", "img/photo-defile2.jpeg"];
const img = document.querySelector('.img-def');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const verifAttImg = img.hasAttribute('src');
const ajoutAttributChecked = 'checked';
const cocherElement = input1.setAttribute('checked', ajoutAttributChecked);
const cocherElement2 = input2.setAttribute('checked', ajoutAttributChecked);
const decocherElement1 = input1.removeAttribute('checked', ajoutAttributChecked);
const decocherElement2 = input2.removeAttribute('checked', ajoutAttributChecked);
let nbClick = 0;
/* verification si la balise img contient un attribut src */
/* ajout de l'attribut src avec le liens de la premier image de mon tableau */
/* puis j'ajoute un atribut checked au premiere input en dessous de mon image */

function changementImage() {
    if (!verifAttImg) {
        img.setAttribute('src', tabImageDefilante[0]);
        input1.setAttribute('checked', ajoutAttributChecked);
    }
}
changementImage();

/* ecoute de l event click et appele d'une fonction anonyme */
img.addEventListener('click', () => {

    /* verification du nombre de click et ajoute des img correspondante avec suppression et ajout de l'attribut checked sur le bonne input */
    if (nbClick % 2 === 0 || nbClick === 0) {
        img.setAttribute('src', tabImageDefilante[0]);
        input2.removeAttribute('checked', ajoutAttributChecked);
        input1.setAttribute('checked', ajoutAttributChecked);
    } else {
        img.setAttribute('src', tabImageDefilante[1]);
        input1.removeAttribute('checked', ajoutAttributChecked);
        input2.setAttribute('checked', ajoutAttributChecked);
    }
});
/* SLIDER FIN */
/* LES DIV ARTISTES ET DETECTION DES CLICKS SUR LES BOUTONS */
let nbClickBtn1 = 0;
let nbClickBtn2 = 0;
let nbClickBtn3 = 0;
let nbClickDesactiv2 = 0;
let divArtiste = document.body.getElementsByClassName('div-artiste');
const boutonEnSp1 = document.getElementById('bouton1')
const boutonEnSp2 = document.getElementById('bouton2')
const boutonEnSp3 = document.getElementById('bouton3')


function ecouteBouton1() {
    boutonEnSp1.addEventListener('click', () => {
        if (nbClickBtn1 === 1) {
            console.log(nbClickBtn1);
            const divAjouter = document.createElement('div');
            const h2Ajouter = document.createElement('h2');
            const p1Ajouter = document.createElement('p');
            const p2Ajouter = document.createElement('p');
            const p3Ajouter = document.createElement('p');
            const boutonAjouter = document.createElement('button');
            const contenueBouton = document.createTextNode(" FERMER ");
            const contenueH2 = document.createTextNode(" DESCRIPTION :");
            const contenueP1 = document.createTextNode("NOM :");
            const contenueP2 = document.createTextNode("PRENOM :");
            const contenueP3 = document.createTextNode("AGE :");

            /* ajoute du h2 */
            divArtiste[0].append(divAjouter);
            divAjouter.append(h2Ajouter);
            h2Ajouter.append(contenueH2);
            /* ajout du p1 */
            divAjouter.append(p1Ajouter);
            p1Ajouter.append(contenueP1);
            /* ajout du p2 */
            divAjouter.append(p2Ajouter);
            p2Ajouter.append(contenueP2);
            /* ajout du p3 */
            divAjouter.append(p3Ajouter);
            p3Ajouter.append(contenueP3);
            /* ajout du bouton pour desactiver */
            divAjouter.append(boutonAjouter);
            boutonAjouter.append(contenueBouton);
            boutonAjouter.setAttribute('onclick', 'nbClickDesactiv1++');
            nbClickDesactiv1 = 0;
            /* ecoute pour le bonjour pour fermer la div description */
            boutonAjouter.addEventListener('click', () => {
                if (nbClickDesactiv1 === 1) {
                    divAjouter.style.display = 'none';
                    console.log(nbClickDesactiv1);
                    nbClickBtn1 = 0;
                }

            })
        };
    })

}
ecouteBouton1();

function ecouteBouton2() {
    boutonEnSp2.addEventListener('click', () => {
        if (nbClickBtn2 === 1) {
            console.log(nbClickBtn2);
            const divAjouter = document.createElement('div');
            const h2Ajouter = document.createElement('h2');
            const p1Ajouter = document.createElement('p');
            const p2Ajouter = document.createElement('p');
            const p3Ajouter = document.createElement('p');
            const boutonAjouter = document.createElement('button');
            const contenueBouton = document.createTextNode(" FERMER ");
            const contenueH2 = document.createTextNode(" DESCRIPTION :");
            const contenueP1 = document.createTextNode("NOM :");
            const contenueP2 = document.createTextNode("PRENOM :");
            const contenueP3 = document.createTextNode("AGE :");
            /* ajoute du h2 */
            divArtiste[1].append(divAjouter);
            divAjouter.append(h2Ajouter);
            h2Ajouter.append(contenueH2);
            /* ajout du p1 */
            divAjouter.append(p1Ajouter);
            p1Ajouter.append(contenueP1);
            /* ajout du p2 */
            divAjouter.append(p2Ajouter);
            p2Ajouter.append(contenueP2);
            /* ajout du p3 */
            divAjouter.append(p3Ajouter);
            p3Ajouter.append(contenueP3);
            /* ajout du bouton pour desactiver */
            divAjouter.append(boutonAjouter);
            boutonAjouter.append(contenueBouton);
            boutonAjouter.setAttribute('onclick', 'nbClickDesactiv2++');
            nbClickDesactiv2 = 0;

            boutonAjouter.addEventListener('click', () => {
                if (nbClickDesactiv2 === 1) {
                    divAjouter.style.display = 'none';
                    console.log(nbClickDesactiv2);
                    nbClickBtn2 = 0;
                }
            })

        }
    })
}
ecouteBouton2();


function ecouteBouton3() {
    boutonEnSp3.addEventListener('click', () => {
        if (nbClickBtn3 === 1) {
            const divAjouter = document.createElement('div');
            const h2Ajouter = document.createElement('h2');
            const p1Ajouter = document.createElement('p');
            const p2Ajouter = document.createElement('p');
            const p3Ajouter = document.createElement('p');
            const boutonAjouter = document.createElement('button');
            const contenueBouton = document.createTextNode(" FERMER ");
            const contenueH2 = document.createTextNode(" DESCRIPTION :");
            const contenueP1 = document.createTextNode("NOM :");
            const contenueP2 = document.createTextNode("PRENOM :");
            const contenueP3 = document.createTextNode("AGE :");
            /* ajoute du h2 */
            divArtiste[2].append(divAjouter);
            divAjouter.append(h2Ajouter);
            h2Ajouter.append(contenueH2);
            /* ajout du p1 */
            divAjouter.append(p1Ajouter);
            p1Ajouter.append(contenueP1);
            /* ajout du p2 */
            divAjouter.append(p2Ajouter);
            p2Ajouter.append(contenueP2);
            /* ajout du p3 */
            divAjouter.append(p3Ajouter);
            p3Ajouter.append(contenueP3);
            /* ajout du bouton pour desactiver */
            divAjouter.append(boutonAjouter);
            boutonAjouter.append(contenueBouton);
            boutonAjouter.setAttribute('onclick', 'nbClickDesactiv3++');
            nbClickDesactiv3 = 0;

            boutonAjouter.addEventListener('click', () => {
                if (nbClickDesactiv3 === 1) {
                    divAjouter.style.display = 'none';
                    console.log(nbClickDesactiv3);
                    nbClickBtn3 = 0;
                }
            })
        }
    })
}
ecouteBouton3();

/*----------FORMULAIRE---------------*/