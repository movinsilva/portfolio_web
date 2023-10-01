import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-web',
  templateUrl: './portfolio-web.component.html',
  styleUrls: ['./portfolio-web.component.css']
})
export class PortfolioWebComponent {
  images: string[] = [
    "./assets/tech/java.png",
    "./assets/tech/python.png",
    "./assets/tech/c.png"
    // Add more image URLs as needed
  ];

  imageObject: Array<object> = [
    {
      image: "./assets/projects/portfolio-web/portfolio-web-page1.png",
      thumbImage: "./assets/projects/portfolio-web/portfolio-web-page1.png",
      alt: 'alt of image',
      title: 'Landing page'
  },
    {
      image: "./assets/projects/portfolio-web/portfolio-web-page2.png", // Support base64 image
      thumbImage: "./assets/projects/portfolio-web/portfolio-web-page2.png", // Support base64 image
      title: 'Experience page', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }
];

logos1: string[] = [
  "./assets/tech/angular.png",
  "./assets/tech/html.png",
  "./assets/tech/css.png",
  "./assets/tech/ts.png"
]
}
