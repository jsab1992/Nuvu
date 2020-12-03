import { Component } from '@angular/core';
// import { CarouselItemDirective } from '../carousel/carousel-item.directive';
// import { CarouselItemElement } from '../carousel/carousel.component';

@Component({
  selector: 'app-card-spinner-slider',
  templateUrl: './card-spinner-slider.component.html',
  styleUrls: ['./card-spinner-slider.component.scss'],
})
export class CardSpinnerSliderComponent  {
  constructor() {}
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];


  addSlide() {
    this.items.push({
      title: `Slide 4`,
    });
  }
}
