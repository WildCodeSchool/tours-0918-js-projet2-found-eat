import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-comparateur',
	templateUrl: './comparateur.component.html',
	styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit, OnDestroy {

	product1: any;
	product2: any;
	timer: number;
	timeOut: any;

	product1Cpt: number;
	product2Cpt: number;

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {

		this.product1Cpt = 7;
		this.product2Cpt = 7;

		this.timer = 5; // durée avant redirection en secondes

		// Si les produits existent on les convertit en objet et on les assigne a leurs variables respective
		if (localStorage['product1'] && localStorage['product2']) {
			this.product1 = JSON.parse(localStorage['product1']);
			this.product2 = JSON.parse(localStorage['product2']);
		} else if (!localStorage['product1'] || !localStorage['product2']) {
			// Sinon si il manque un produit (donc pas de comparaison possible), redirection
			this.rebourd();
		}

	}

	ngOnDestroy() {
		// Pour éviter que le setTimeout continue lorsque l'on change de view
		clearTimeout(this.timeOut);
	}

	resetComparator() {
		window.scrollTo(0, 0);  // Retour sur le haut de la page
		// On supprime les produits selectionnés du localStorage
		localStorage.removeItem('product1');
		localStorage.removeItem('product2');
		// On réinitialise les variables de produits
		this.product1 = '';
		this.product2 = '';
		// redirection
		this.rebourd();
	}

	// Fonction pour le compte à rebourd et la redirection
	rebourd() {
		if (this.timer >= 0) {
			this.timeOut = setTimeout( () => {
				(() => {
					this.timer--;
					this.rebourd();
				})();
			}, 1000);
		} else {
			this.router.navigate([`gallery`]);
		}
	}
	// Tant que timer n'est pas égal à 0 on lance un setTimeout de 1sec
	// Toutes les secondes on décrémente timer et on relance la fonction rebourd
	// Lorsque le timer tombe à zéro, on est redirigé vers la vue 'gallery'

}
