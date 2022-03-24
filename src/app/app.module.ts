import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HtcHomeComponent } from './htc-home/htc-home.component';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutHtcComponent } from './about-htc/about-htc.component';
import { DigitalExperienceComponent } from './digital-experience/digital-experience.component';
import { CloudComponent } from './cloud/cloud.component';
import { AgileComponent } from './agile/agile.component';
import { QualityComponent } from './quality/quality.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HtcHomeComponent,
    AboutHtcComponent,
    DigitalExperienceComponent,
    CloudComponent,
    AgileComponent,
    QualityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
