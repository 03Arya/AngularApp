import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  count = 0;
  clickPower = 1;

  buyClickPower() {
    if (this.count >= 10) {
      this.count -= 10;
      this.clickPower++;
    }
  }

  buyClickPower10() {
    if (this.count >= 100) {
      this.count -= 100;
      this.clickPower += 10;
    }
  }

  click() {
    this.count += this.clickPower;
    
  }

}