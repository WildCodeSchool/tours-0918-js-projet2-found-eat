import { SidebarComponent } from './nav-bar/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ComparateurComponent } from './comparateur/comparateur.component';

import { Ingredients } from './ingredients.pipe';

import { ProductsService } from './services/products.service';
import { ImagePreloadDirective } from './image-preload.directive';

const appRoutes: Routes = [
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'gallery/:id', component: GalleryComponent },
	{ path: 'comparateur', component: ComparateurComponent },
	{ path: '', redirectTo: 'gallery/1', pathMatch: 'full' },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	declarations: [
		AppComponent,
		GalleryComponent,
		ModalComponent,
		CarouselComponent,
		SidebarComponent,
		FooterComponent,
		NavBarComponent,
		ComparateurComponent,
		ImagePreloadDirective,
		Ingredients,
	],
	imports: [
		BrowserModule,
		NgbModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [
		ProductsService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
