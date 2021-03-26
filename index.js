
/* Actualité */

/* Date */
let date1 = new Date();
let dateLocale = date1.toLocaleString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',});
document.querySelector(".date").innerHTML = dateLocale;

const recent = document.querySelector(".recent");
const evenement = document.querySelector(".evenement");
const artFrancais = document.querySelector(".art-francais");
const international = document.querySelector(".international");
const aVenir = document.querySelector(".a-venir");

const imageArticle = document.querySelector(".img-article");
const nomArticle = document.querySelector(".h2-actualite");
const textArticle = document.querySelector(".text-article");

/* addEventListener pour faire le changement d'article pour chaque catégories */

recent.addEventListener('click', () => {
    nomArticle.innerHTML = "Festival de l'art Wilder de Lyon";
    imageArticle.src = "img/imgcrea1.jpeg";
    textArticle.innerHTML = "Les arts représentent une forme de l'expression du vivant, généralement influencée par la culture et entraînée par une impulsion créatrice. Les arts font partie du ressenti et de la subjectivité, c'est pourquoi une définition finie n'est pas possible. Les éléments majeurs des arts sont la littérature, le spectacle vivant, dont la musique, la danse et le théâtre, les arts culinaires telles que, par exemple, la cuisine, la chocolaterie et la vinification, les arts médiatiques comme la photographie et le cinéma ainsi que les arts visuels qui comprennent le dessin, la peinture et la sculpture. Certaines formes d'art combinent un élément visuel au spectacle (par exemple un film) et l'écrit (par exemple, la bande dessinée)."
});

evenement.addEventListener('click', () => {
    nomArticle.innerHTML = "Un portrait géant de femme dessiné dans le sable";
    imageArticle.src = "img/imgslider.jpeg";
    textArticle.innerHTML = "Un portrait de 60 mètres de haut représentant une femme allant chercher de l'eau a été réalisé sur le sable de la plage de Whitby en Angleterre à l'occasion de la journée internationale de l'eau le 22 mars prochain. Un dessin éphémère qui vise à alerter contre les répercussions du changement climatique."
});

artFrancais.addEventListener('click', () => {
    nomArticle.innerHTML = "Une valise remplie de photos anciennes découverte à Lyon";
    imageArticle.src = "img/artiste-1.jpeg";
    textArticle.innerHTML = "C’est une ancienne valise au contenu plus que surprenant. Elle renferme, à travers des clichés, des négatifs et des vidéos, des éléments du passé, des bribes d’histoire de la première moitié du XXème siècle. Aujourd’hui, elle se trouve aux Archives départementales de l’Ain, révèle France 3, jeudi 25 mars. J’ai conscience d’avoir collecté une valise qui correspond pour nous à un vrai trésor";  
});

international.addEventListener('click', () => {
    nomArticle.innerHTML = "La colère des galeries d’art parisiennes";
    imageArticle.src = "img/artiste-2.jpeg";
    textArticle.innerHTML = "Trop, c’est trop ! Fermées depuis le 20 mars dans le cadre du nouveau confinement, les galeries d’art parisiennes, dernier bastion où il était encore possible de voir des œuvres sans le filtre d’un écran, sont déjà montées au front. Prenant au mot Alain Griset, ministre délégué chargé des petites et moyennes entreprises, qui a assuré, dimanche 21 mars, que la liste des commerces autorisés à rester ouverts pourra évoluer lorsqu’une « aberration » est constatée, le Comité professionnel des galeries d’art (CPGA) réclame une égalité de traitement avec les maisons de ventes aux enchères, leurs principales concurrentes, restées, elles, ouvertes.";
});

aVenir.addEventListener('click', () => {
    nomArticle.innerHTML = "La Biennale de Lyon confie à Sam Bardaouil et Till Fellrath";
    imageArticle.src = "img/artiste-3.jpeg";
    textArticle.innerHTML = "Cette 16e édition de la Biennale de Lyon se déroulera de septembre 2022 à janvier 2023 et sera l’occasion de célébrer son 30e anniversaire. Isabelle Bertolotti, directrice de la Biennale d’art contemporain depuis 2019, précise son choix : « Je m’intéresse depuis plusieurs années à l’engagement profond que Sam Bardaouil et Till Fellrath savent susciter auprès des publics des grandes cités à travers le monde, ainsi que de la place centrale qu’ils accordent aux artistes dans leurs projets curatoriaux. Je suis impatiente de voir se déployer, dans le cadre de la Biennale et sur tout le territoire, les multiples projets issus de leurs expériences collaboratives antérieures. Leurs pratiques de commissaires indépendants, non rattachés à une institution, leurs octroient une grande autonomie d’action dont pourra bénéficier la Biennale de Lyon. » Créée en 1991, la Biennale de Lyon est l’une des plus grandes biennales d’art contemporain au plan international et la première manifestation artistique d’envergure au plan national. L’édition 2019 a attiré près de 280 000 visiteurs, dont plus de la moitié avait moins de 26 ans. Dotée de plusieurs modes de médiation innovants, elle nourrit le dialogue et l’échange.e à grand pas";
});


/* FIN Actualite*/

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
<<<<<<< HEAD

=======
>>>>>>> c94ad0ceb0f13d6135837db45da7c52a45b96153
