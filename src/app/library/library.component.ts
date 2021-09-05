import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  projects = [
    {
      thumbnail: "https://miro.medium.com/max/8984/1*Ht9x0ae_1W9X0R-WpssilA.jpeg",
      images: [],
      name: "Collection View",
      description: "Some sort of description here",
      platform: "iOS",
      author: "Daniel Kioko"
    },
    {
      thumbnail: "https://miro.medium.com/max/8984/1*Ht9x0ae_1W9X0R-WpssilA.jpeg",
      images: [],
      name: "Collection View",
      description: "Some sort of description here",
      platform: "iOS",
      author: "Daniel Kioko"
    },
    {
      thumbnail: "https://miro.medium.com/max/8984/1*Ht9x0ae_1W9X0R-WpssilA.jpeg",
      images: [],
      name: "Collection View",
      description: "Some sort of description here",
      platform: "iOS",
      author: "Daniel Kioko"
    },
    {
      thumbnail: "https://miro.medium.com/max/8984/1*Ht9x0ae_1W9X0R-WpssilA.jpeg",
      images: [],
      name: "Collection View",
      description: "Some sort of description here",
      platform: "iOS",
      author: "Daniel Kioko"
    },
    {
      thumbnail: "https://miro.medium.com/max/8984/1*Ht9x0ae_1W9X0R-WpssilA.jpeg",
      images: [],
      name: "Collection View",
      description: "Some sort of description here",
      platform: "iOS",
      author: "Daniel Kioko"
    }
  ]

  ngOnInit(): void {
  }

  getProjects() {
  }

}
