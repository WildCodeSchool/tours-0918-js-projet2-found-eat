import { SidebarComponent } from './nav-bar/sidebar/sidebar.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
const appRoutes: Routes = [
{ path: '', redirectTo: '1', pathMatch: 'full' },
{ path: ':id', component: GalleryComponent },
];

@NgModule({
	declarations: [
	AppComponent,
	GalleryComponent,
	ModalComponent,
  CarouselComponent,
  NavBarComponent,
  SidebarComponent,
  FooterComponent,
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
