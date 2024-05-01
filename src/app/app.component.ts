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
    this.count -= 10;
    this.clickPower++;

  }

  buyClickPower10() {
    this.count -= 100;
    this.clickPower += 10;

  }

  buyClickPower100() {
    this.count -= 10000;
    this.clickPower += 100;

  }

  buyClickPower1000() {
    this.count -= 100000;
    this.clickPower += 1000;

  }

  click() {
    this.count += this.clickPower;
  }
}

