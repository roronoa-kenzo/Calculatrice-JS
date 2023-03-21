
// création de l'élément conteneur principal
const calculatrice = document.createElement('div');
calculatrice.classList.add('calculatrice');

// création de l'élément écran
const ecran = document.createElement('div');
ecran.classList.add('ecran');
calculatrice.appendChild(ecran);

// création de l'élément touches et de ses boutons
const touches = document.createElement('div');
touches.classList.add('touches');
calculatrice.appendChild(touches);

const touchesArray = [
  { key: '8', label: 'C' },
  { key: '53', label: '(' },
  { key: '219', label: ')' },
  { key: '111', label: '/' },
  { key: '103', label: '7' },
  { key: '104', label: '8' },
  { key: '105', label: '9' },
  { key: '106', label: '*' },
  { key: '100', label: '4' },
  { key: '101', label: '5' },
  { key: '102', label: '6' },
  { key: '109', label: '-' },
  { key: '97', label: '1' },
  { key: '98', label: '2' },
  { key: '99', label: '3' },
  { key: '107', label: '+' },
  { key: '96', label: '0' },
  { key: '110', label: '.' },
  { key: '13', label: '=' },
];

touchesArray.forEach(touch => {
  const bouton = document.createElement('button');
  bouton.classList.add('bouton');
  bouton.dataset.key = touch.key;
  bouton.textContent = touch.label;
  touches.appendChild(bouton);
});

// ajouter le calculatrice créé au DOM
document.body.appendChild(calculatrice);

const listeKeycode = touchesArray.map(touche => touche.key);

document.addEventListener('keydown', (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

document.addEventListener('click', (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case '8':
        ecran.textContent = '';
        break;
      case '13':
        try {
          const calcul = eval(ecran.textContent);
          ecran.textContent = calcul;
        } catch (error) {
          alert(`Une erreur est survenue dans votre calcul : ${error.message}`);
        }
        break;
      default:
        const touche = touchesArray.find(touch => touch.key === valeur);
        ecran.textContent += touche.label;
    }
  }
};