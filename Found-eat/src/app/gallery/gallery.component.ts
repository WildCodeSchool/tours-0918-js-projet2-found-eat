import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

	products: any[]; // Liste des produits
	page: number; // Page pour la pagination
	totalPages: number; // Nombre total de pages pour la pagination

	showProducts: any[]; // produits à afficher via la pagination

	constructor(private service: NgbModal, private route: ActivatedRoute, private router: Router) { }

	openMedia(content: any) {
		this.service.open(content).result

		.then(resultat => {
			console.log(resultat);
		})

		.catch(error => {
			console.log(error);
		});
	}

	changePage() {
		this.showProducts = this.products.slice((this.page - 1) * 8, 8 * this.page);
		this.router.navigate([`gallery/${ this.page }`]);
		window.scrollTo(0, 0);
	}

	ngOnInit() {

		this.products = JSON.parse(localStorage['products']);

		this.totalPages = (this.products.length / 8) * 10; // Formule peut-être incorrecte si il y a vraiment beaucoup d'articles ?

		if (this.route.snapshot.params['id']) {
			this.page = this.route.snapshot.params['id'];
		} else {
			this.page = 1;
			this.router.navigate([`gallery/${ this.page }`]);
		}

		// Si le paramètre est incorrect, retour vers la page 1
		if (this.totalPages < this.page || isNaN(this.page)) {
			this.page = 1;
			this.router.navigate([`gallery/${ this.page }`]);
		}

		this.showProducts = this.products.slice((this.page - 1) * 8, 8 * this.page);

	}

}
