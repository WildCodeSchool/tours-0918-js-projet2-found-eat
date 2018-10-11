import { Component, OnInit, Input } from '@angular/core';


@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
	@Input()
	mediaInput: any;

	@Input()
	modalInput: any;

	constructor() { }

	ngOnInit() {
	}

	getItem() {

		if (localStorage['product1'] === JSON.stringify(this.mediaInput) || localStorage['product2'] === JSON.stringify(this.mediaInput)) {
			alert('Same product selected');
		} else if (!localStorage['product1']) {
			localStorage.setItem('product1', JSON.stringify(this.mediaInput));
		} else if (localStorage['product1'] && localStorage['product2']) {
			alert('Comparator already set');
		} else if (!localStorage['product2']) {
			localStorage.setItem('product2', JSON.stringify(this.mediaInput));
		}
	}
}
