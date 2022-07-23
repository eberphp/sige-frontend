import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './views/main.component';
import { HomeComponent } from './views/home/home.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SafePipe } from './pipes/safe.pipe';
import { SwiperModule } from 'swiper/angular';
import { PublicationTypeTwoComponent } from './components/publication/publication-type-two/publication-type-two.component';
import { PublicationTypeThreeComponent } from './components/publication/publication-type-three/publication-type-three.component';
import { PublicationTypeFiveComponent } from './components/publication/publication-type-five/publication-type-five.component';
import { PublicationTypeSixComponent } from './components/publication/publication-type-six/publication-type-six.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SafePipe,
    PublicationTypeTwoComponent,
    PublicationTypeThreeComponent,
    PublicationTypeFiveComponent,
    PublicationTypeSixComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, SwiperModule],
})
export class WebsiteModule {}
