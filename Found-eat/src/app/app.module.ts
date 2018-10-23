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
import { Productlist } from './services/products.list';
import { ImagePreloadDirective } from './image-preload.directive';
import { SlideshowUpdateComponent } from './slideshow-update/slideshow-update.component';

const appRoutes: Routes = [
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'gallery/:id', component: GalleryComponent },
	{ path: 'comparateur', component: ComparateurComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: 'gallery/1', pathMatch: 'full' },
	{ path: 'contact', component: ContactComponent},
	{ path: '**', redirectTo: '' }];

@NgModule({
	declarations: [
		AppComponent,
		CarouselComponent,
    SidebarComponent,
    AjoutComponent,
		ComparateurComponent,
		ImagePreloadDirective,
		Ingredients,
		LoginComponent,
		GalleryComponent,
		ModalComponent,
		NavBarComponent,
		FooterComponent,
		ContactComponent,
		SlideshowUpdateComponent
	],
	imports: [
		BrowserModule,
		NgbModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [
		Productlist,
	],
	bootstrap: [AppComponent]

})
export class AppModule { }
