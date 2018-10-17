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

import { AppRoutingModule } from './app-routing.module';

import { ProductsService } from './services/products.service';
import { LoginService } from './services/login.service';
import { ImagePreloadDirective } from './image-preload.directive';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
	declarations: [
		AppComponent,
		CarouselComponent,
		SidebarComponent,
		ComparateurComponent,
		ImagePreloadDirective,
		LoginComponent,
		GalleryComponent,
		ModalComponent,
		NavBarComponent,
		FooterComponent,
		ContactComponent,
		AcceuilComponent
	],
	imports: [
		BrowserModule,
		NgbModule,
		FormsModule,
		AppRoutingModule,
	],
	providers: [
		ProductsService,
		LoginService,
	],
	bootstrap: [AppComponent]

})
export class AppModule { }
