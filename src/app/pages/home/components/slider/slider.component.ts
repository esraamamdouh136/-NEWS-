import { Component, OnInit } from '@angular/core';

export interface imagesSlider {
  src: string,
}

const DataSlider: imagesSlider[] = [
  {
    src: 'assets/images/slider-1.png',
  },
  {
    src: 'assets/images/slider-2.png',
  },
  {
    src: 'assets/images/slider-3.png',
  }
]

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  DataSlider = DataSlider
  constructor() {
    console.log(this.DataSlider)
  }

  ngOnInit(): void {
  }

}
