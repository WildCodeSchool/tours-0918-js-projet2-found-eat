import { SidebarComponent } from './nav-bar/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { ContactComponent } from './contact/contact.component';
import { Ingredients } from './ingredients.pipe';

import { ProductsService } from './services/products.service';
import { ImagePreloadDirective } from './image-preload.directive';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
	{ path: 'acceuil', component: AcceuilComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'gallery/:id', component: GalleryComponent },
	{ path: 'comparateur', component: ComparateurComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: 'acceuil', pathMatch: 'full' },
	{ path: 'contact', component: ContactComponent},
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' }];

@NgModule({
	declarations: [
		AppComponent,
		CarouselComponent,
		SidebarComponent,
		ComparateurComponent,
		ImagePreloadDirective,
		Ingredients,
		LoginComponent,
		GalleryComponent,
		ModalComponent,
		NavBarComponent,
		FooterComponent,
		ContactComponent,
		AcceuilComponent,
		NotFoundComponent
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
