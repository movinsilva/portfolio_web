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
      title: 'Landing page',
      order: 1
  },
    {
      image: "./assets/projects/portfolio-web/portfolio-web-page2.png", // Support base64 image
      thumbImage: "./assets/projects/portfolio-web/portfolio-web-page2.png", // Support base64 image
      title: 'Experience page', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
  {
    image: "./assets/projects/portfolio-web/projects.png",
    thumbImage: "./assets/projects/portfolio-web/projects.png",
    alt: 'alt of image',
    title: 'Landing page',
    order: 3
},
{
  image: "./assets/projects/portfolio-web/tech.png",
  thumbImage: "./assets/projects/portfolio-web/tech.png",
  alt: 'alt of image',
  title: 'Landing page',
  order: 4
},
{
  image: "./assets/projects/portfolio-web/travelgo.png",
  thumbImage: "./assets/projects/portfolio-web/travelgo.png",
  alt: 'alt of image',
  title: 'Landing page',
  order: 5
},
{
  image: "./assets/projects/portfolio-web/travelgofrontend.png",
  thumbImage: "./assets/projects/portfolio-web/travelgofrontend.png",
  alt: 'alt of image',
  title: 'Landing page',
  order: 6
},
{
  image: "./assets/projects/portfolio-web/hrms.png",
  thumbImage: "./assets/projects/portfolio-web/hrms.png",
  alt: 'alt of image',
  title: 'Landing page',
  order: 7
},
];

logos1: string[] = [
  "./assets/tech/angular.png",
  "./assets/tech/html.png",
  "./assets/tech/css.png",
  "./assets/tech/ts.png",
  "./assets/tech/emailjs.png",
  "./assets/tech/github.png",
  "./assets/tech/github-actions.png",

]
}
