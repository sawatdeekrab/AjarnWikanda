import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router) { }

  gotoBiography(): void {
    this.router.navigate(['/biography'], { skipLocationChange: true });
  }
  gotoResearch(): void {
    this.router.navigate(['/research'], { skipLocationChange: true });
  }
  gotoContact(): void {
    this.router.navigate(['/contact'], { skipLocationChange: true });
  }
}
