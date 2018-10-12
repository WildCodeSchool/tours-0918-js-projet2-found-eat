import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component'
import { NgModule } from '@angular/core';
          
const appRoutes: Routes = [
{ path: 'gallery', redirectTo: 'gallery/1', pathMatch: 'full' },
{ path: 'gallery/:id', component: GalleryComponent },
{ path: 'contact', component: ContactComponent},
];

@NgModule({
	declarations: [
	AppComponent,
	GalleryComponent,
	ModalComponent,
  CarouselComponent,
  NavBarComponent,
  FooterComponent,
  ContactComponent
	],
	imports: [
	BrowserModule,
	NgbModule,
	FormsModule,
	RouterModule.forRoot(appRoutes),
	],
	providers: [],
	bootstrap: [AppComponent]
	
})
export class AppModule { }
