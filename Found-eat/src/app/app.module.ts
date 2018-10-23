import { SidebarComponent } from './nav-bar/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AjoutComponent } from './ajout/ajout.component';
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
import { ContactComponent } from './contact/contact.component'
import { Ingredients } from './ingredients.pipe';
import { ImagePreloadDirective } from './image-preload.directive';

import { AppRoutingModule } from './app-routing.module';
import { SlideshowUpdateComponent } from './slideshow-update/slideshow-update.component';
import { LoginService } from './services/login.service';
import { ImagePreloadDirective } from './image-preload.directive';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TypeheadComponent } from './typehead/typehead.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
	declarations: [
		AppComponent,
		CarouselComponent,
		SidebarComponent,
		AjoutComponent,
		ComparateurComponent,
		ImagePreloadDirective,
		LoginComponent,
		GalleryComponent,
		ModalComponent,
		NavBarComponent,
		FooterComponent,
		ContactComponent,
		SlideshowUpdateComponent,
		AcceuilComponent,
		TypeheadComponent,
		ProductPageComponent
	],
	imports: [
		BrowserModule,
		NgbModule,
		FormsModule,
		AppRoutingModule,
	],
	providers: [
	],
	bootstrap: [AppComponent]

})
export class AppModule { }
