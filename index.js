/* CONST CONCERNANT LA GESTION DES IMAGE (SLIDE) */
const tabImageDefilante = ["img/photo-defile.jpeg", "img/photo-defile2.jpeg"];
const img = document.querySelector('.img-def');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const verifAttImg = img.hasAttribute('src');
let nbClick = 0;
/*  DETECTION DES CLICKS SUR LES BOUTONS POUR LA DESCRIPTION */
let nbClickBtn1 = 0;
let nbClickBtn2 = 0;
let nbClickBtn3 = 0;
const boutonEnSp1 = document.getElementById('bouton1');
const boutonEnSp2 = document.getElementById('bouton2');
const boutonEnSp3 = document.getElementById('bouton3');
const divDescription = document.querySelectorAll('.div-description');

class Utils {
    constructor() {

    }

    afficherDescription(boutonClick, elementAmodifier, index) {
            if (boutonClick % 2 != 0) {
                elementAmodifier[index].style.display = "flex";
            } else if (boutonClick % 2 === 0) {
                elementAmodifier[index].style.display = 'none';
            }
        }
        /* fonction permettant d'initialiser l'image */

    initialisationImage(verifAttElemnt, elemnt, tableau, index) {
            if (!verifAttElemnt) {
                elemnt.setAttribute('src', tableau[index]);
                this.ajouterattribut(input1, 'checked', 'checked');
            }
        }
        /*  fonction permettant le switch des image apres verification du nombre de click
        et ajoute des img correspondante avec suppression et ajout de l'attribut checked sur le bonne input */
    switchImage(clicBouton, element, tableau, index, index2) {
        if (clicBouton % 2 === 0 || clicBouton === 0) {
            this.ajouterattribut(element, 'src', tableau[index]);
            this.suprimerattribut(input2, 'checked', 'checked');
            this.ajouterattribut(input1, 'checked', 'checked');
        } else {
            this.ajouterattribut(element, 'src', tableau[index2]);
            this.suprimerattribut(input1, 'checked', 'checked');
            this.ajouterattribut(input2, 'checked', 'checked');
        }
    }

    ajouterattribut(element, attribut, contenue) {
        element.setAttribute(attribut, contenue);
    }
    suprimerattribut(element, attribut, contenue) {
        element.removeAttribute(attribut, contenue);

    }
}


const utilsObject = new Utils();


utilsObject.initialisationImage(verifAttImg, img, tabImageDefilante, 0);

img.addEventListener('click', () => {
    utilsObject.switchImage(nbClick, img, tabImageDefilante, 0, 1);
});

boutonEnSp1.addEventListener('click', () => {
    utilsObject.afficherDescription(nbClickBtn1, divDescription, 0);
});

boutonEnSp2.addEventListener('click', () => {
    utilsObject.afficherDescription(nbClickBtn2, divDescription, 1);
});

boutonEnSp3.addEventListener('click', () => {
    utilsObject.afficherDescription(nbClickBtn3, divDescription, 2);
}); /* MENU BURGER */
const burgerNav = document.querySelector('.burgerNav');
const btnBurger = document.querySelector('.btn-burger');
const divMenus = document.querySelector('.div-menus');



let clickBurger = 0;
btnBurger.addEventListener('click', () => {
    console.log(clickBurger);
    if (clickBurger % 2 != 0) {
        burgerNav.style.display = 'flex';

    } else {
        burgerNav.style.display = 'none';
    }

});