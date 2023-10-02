import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrms',
  templateUrl: './hrms.component.html',
  styleUrls: ['./hrms.component.css']
})
export class HrmsComponent implements OnInit {

  screenWidth: number = 0;

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }
  // Update the screen width when the window is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
  }

}
