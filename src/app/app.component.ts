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
  powerUpActive = false;
  animate = false;

  buyPowerUp() {
    if (this.count >= 100) {
      this.count /= 2;
      this.powerUpActive = true;
      this.clickPower *= 2;

      setTimeout(() => {
        this.powerUpActive = false;
        this.clickPower /= 2;
      }, 10000); // Power-up lasts for 10 seconds
    }
  }

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
    this.animate = true;
    this.count = Math.trunc(this.count + this.clickPower);

    setTimeout(() => {
      this.animate = false;
    }, 200); // remove the animate class after 0.2 seconds
  }
}

