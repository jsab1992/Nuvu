import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardInfoImgComponent } from './components/shared/card-info-img/card-info-img.component';
import { CardSpinnerInfoComponent } from './components/shared/card-spinner-info/card-spinner-info.component';
import { CardSpinnerSliderComponent } from './components/shared/card-spinner-slider/card-spinner-slider.component';
import { CardDataListComponent } from './components/shared/card-data-list/card-data-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';
import { CarouselComponent, CarouselItemElement } from './components/shared/carousel/carousel.component';
import { CarouselItemDirective } from './components/shared/carousel/carousel-item.directive';
import { MediaCarouselComponent } from './components/shared/media-carousel/media-carousel.component';
import { TargetInfoComponent } from './components/shared/target-info/target-info.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CardInfoImgComponent,
    CardSpinnerInfoComponent,
    CardSpinnerSliderComponent,
    CardDataListComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    MediaCarouselComponent,
    TargetInfoComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
