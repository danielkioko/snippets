import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  backToHomepage() {
    this.router.navigate(['/']);
  }

  slides = [
    {
      image: "assets/budget.png",
      description: "Budget - A simple budgeting app to notify the user of their bills. Built in Swift + UIKit",
      link: ""
    },
    {
      image: "assets/natgeo.png",
      description: "Quote Presentation slides - programmed in Swift + UIKit",
      link: ""
    }
  ]
  selectedSlideIndex = 0;
  selectedSlide = {
    image: "assets/budget.png",
    description: "Budget - A simple budgeting app to notify the user of their bills. Built in Swift + UIKit",
    link: ""
  }

  nextSlide() {
    if (this.selectedSlideIndex == (this.slides.length - 1)) {
      this.selectedSlideIndex = 0
      this.selectedSlide = this.slides[this.selectedSlideIndex]
    } else {
      this.selectedSlideIndex += 1
      this.selectedSlide = this.slides[this.selectedSlideIndex]
    }
  }

}
