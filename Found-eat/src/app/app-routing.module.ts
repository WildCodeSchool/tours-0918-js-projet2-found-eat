import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { ContactComponent } from './contact/contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AjoutComponent } from './ajout/ajout.component';
import { SlideshowUpdateComponent } from './slideshow-update/slideshow-update.component';


const appRoutes: Routes = [
	{ path: 'acceuil', component: AcceuilComponent },
	{ path: 'gallery', component: GalleryComponent },
	{ path: 'gallery/:id', component: GalleryComponent },
	{ path: 'comparateur', component: ComparateurComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: 'acceuil', pathMatch: 'full' },
	{ path: 'contact', component: ContactComponent},
	{ path: 'produit/:name', component: ProductPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'product/:id', component : AjoutComponent},
	{ path: 'ajouter', component: AjoutComponent },
	{ path: 'modification-carousel', component: SlideshowUpdateComponent },
	{ path: '**', redirectTo: '404' }];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
