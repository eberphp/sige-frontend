import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './views/main.component';
import { HomeComponent } from './views/home/home.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [MainComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
