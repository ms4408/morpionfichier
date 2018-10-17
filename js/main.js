var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');

var afficherSymbole = function(cell) {

console.log('case cochee. classes = ', cell.classList.value);
	if (cell.classList.value ==['cell']) {

		if (tourDuJoueur1) {
			cell.classList.add('joueur1');
		} else {
			cell.classList.add('joueur2');
		}
		// 4 - changer le joueur courant
		tourDuJoueur1 = !tourDuJoueur1;
	}
};

var combinaisons = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[2, 4, 6],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8]
];

	//declaration de la fonction dont la logique d'execution
var verifierCombinaisons = function() {
	console.log('verifierCombinaisons');

//for each pour chaque élément du tableau
	combinaisons.forEach(function(combinaison) {
		if (cells[combinaison[0]].classList.contains('joueur1') || cells[combinaison[0]].classList.contains('joueur2')) {
			console.log('first cell not empty in combinaison', combinaison);
			//cells est un tableau on va le parcourir et regarder la valeur des 3 cases correspond aux combinaisons pour verifier si elles sont égales
			//cells[combinaison[0]].textContent === cells[combinaison[1]].textContent &&
			//cells[combinaison[1]].textContent === cells[combinaison[2]].textContent &&
			//cells[combinaison[0]].textContent !== ''

		if(cells[combinaison[0]].classList[1] == cells[combinaison[1]].classList[1] && cells[combinaison[0]].classList[1] == cells[combinaison[2]].classList[1]) {
			console.log('someone won');
			var currentPlayer;
			if(cells[combinaison[0]].classList.contains('joueur1')) {
				currentPlayer = 'joueur 1';
			} else {
				currentPlayer = 'joueur 2';
			}
			console.log('WIN');
    	alert('Bravo ' + currentPlayer + ' !');
			partieGagnee = true;
   		}
		}
	});
};
//prend l'exmple des stylos pour chaque stylo il faut verifier s'il marche
cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (!partieGagnee) {
			afficherSymbole(cell);
			verifierCombinaisons();
		}
	});
});
