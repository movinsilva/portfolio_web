import { Component } from '@angular/core';

@Component({
  selector: 'app-money-manager',
  templateUrl: './money-manager.component.html',
  styleUrls: ['./money-manager.component.css']
})
export class MoneyManagerComponent {
  images: string[] = [
    "./assets/tech/java.png",
    "./assets/tech/python.png",
    "./assets/tech/c.png"
    // Add more image URLs as needed
  ];

  imageObject: Array<object> = [
    {
      image: "./assets/projects/money-manager/1.jpg",
      thumbImage: "./assets/projects/money-manager/1.jpg",
      alt: 'alt of image',
      title: 'Landing page',
      order: 1
  },
    {
      image: "./assets/projects/money-manager/2.jpg", // Support base64 image
      thumbImage: "./assets/projects/money-manager/2.jpg", // Support base64 image
      title: 'Dashboard view', //Optional: You can use this key if want to show image with title
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  },
  {
    image: "./assets/projects/money-manager/3.jpg",
    thumbImage: "./assets/projects/money-manager/3.jpg",
    alt: 'alt of image',
    title: 'Account page',
    order: 3
},
{
  image: "./assets/projects/money-manager/4.jpg",
  thumbImage: "./assets/projects/money-manager/4.jpg",
  alt: 'alt of image',
  title: 'Settings page',
  order: 4
},
{
  image: "./assets/projects/money-manager/5.jpg",
  thumbImage: "./assets/projects/money-manager/5.jpg",
  alt: 'alt of image',
  title: 'Transactions Form page',
  order: 5
},
{
  image: "./assets/projects/money-manager/6.jpg",
  thumbImage: "./assets/projects/money-manager/6.jpg",
  alt: 'alt of image',
  title: 'Transactions page',
  order: 6
},
];

logos1: string[] = [
  "./assets/tech/flutter.png",
  "./assets/tech/sqlite.png",

]
}
