import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-comparateur',
  templateUrl: './comparateur.component.html',
  styleUrls: ['./comparateur.component.css']
})
export class ComparateurComponent implements OnInit, OnDestroy {

  product1: any;
  product2: any;
  timer: number;
  timerSubscription: Subscription;
  message: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    window.scrollTo(0, 0);  // Retour sur le haut de la page

    this.timer = 5; // durée du timer avant la redirection en secondes

    // Si les produits existent on les convertit en objet et on les assigne a leurs variables respective
    if (localStorage['product1'] && localStorage['product2']) {
      this.product1 = JSON.parse(localStorage['product1']);
      this.product2 = JSON.parse(localStorage['product2']);
    } else if (!localStorage['product1'] && localStorage['product2'] || !localStorage['product2'] && localStorage['product1']) {
      this.message = 'Veuillez ajouter encore un produit au comparateur';
      this.rebourd();
    } else if (!localStorage['product1'] || !localStorage['product2']) {
      // Sinon si il manque un produit (donc pas de comparaison possible), redirection
      this.message = 'Veuillez ajouter des produit au comparateur';
      this.rebourd();
    }

  }

	ngOnDestroy() {
		if (this.timerSubscription) {
			this.timerSubscription.unsubscribe();
		}
	}

  resetComparator() {
    window.scrollTo(0, 0);  // Retour sur le haut de la page
    // On supprime les produits selectionnés du localStorage
    localStorage.removeItem('product1');
    localStorage.removeItem('product2');
    // On réinitialise les variables de produits
    this.product1 = '';
    this.product2 = '';
    this.message = 'Vous allez être redirigé';
    // redirection
    this.rebourd();
  }

  // Fonction pour le compte à rebourd et la redirection
  rebourd() {
    const counter = interval(1000);
    this.timerSubscription = counter.subscribe(
      () => {
        this.timer = this.timer - 1;
        if (this.timer < 0) {
          this.router.navigate(['gallery/1']);
        }
      },
      (error) => {
        console.error('Error :' + error);
      },
      () => {
        console.log('Timer complete');
      }
    );
  }

}
