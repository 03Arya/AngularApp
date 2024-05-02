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
  autoClickerActive = false;
  autoClickerInterval: any;
  tier = 0;
  progress = 0;
  tierImages = ['../assets/images/pickaxes/wood.jpg', '../assets/images/pickaxes/stone.jpg', '../assets/images/pickaxes/iron.jpg', '../assets/images/pickaxes/gold.jpg', '../assets/images/pickaxes/diamond.jpg', '../assets/images/pickaxes/netherite.jpg'];
  tierCosts = [500, 5000, 10000, 100000, 1000000];
  autoClickerIntervals = [1000, 900, 800, 700, 600]; // in milliseconds

  upgradeTier() {
    if (this.count >= this.tierCosts[this.tier]) {
      this.count -= this.tierCosts[this.tier];
      this.tier++;
      this.progress = 0; // reset progress
      if (this.autoClickerActive) {
        // Restart the autoclicker with the new interval
        clearInterval(this.autoClickerInterval);
        setTimeout(() => {
          this.startAutoClicker(false);
        }, 100); // delay of 100 milliseconds
      }
    }
  }

  startAutoClicker(deductCost = true) {
    if (deductCost && this.count < 100) {
      return; // not enough count to start the autoclicker
    }
    if (deductCost) {
      this.count -= 100; // cost of the autoclicker
    }
    this.autoClickerActive = true;
    this.autoClickerInterval = setInterval(() => {
      this.click();
      this.progress = (this.progress + 1 / this.tierCosts[this.tier] * 100) % 100;
    }, this.autoClickerIntervals[this.tier]); // click faster with each tier
  }

  stopAutoClicker() {
    if (this.autoClickerActive) {
      clearInterval(this.autoClickerInterval);
      this.autoClickerActive = false;
    }
  }

  buyPowerUp() {
    if (this.count >= 100) {
      this.count /= 2;
      this.progress = (this.count / this.tierCosts[this.tier]) * 100; // update progress
      this.powerUpActive = true;
      this.clickPower *= 2;
  
      setTimeout(() => {
        this.powerUpActive = false;
        this.clickPower /= 2;
      }, 10000); // power up lasts for 10 seconds
    }
  }

buyClickPower() {
  this.count -= 10;
  this.clickPower++;
  this.progress = (this.count / this.tierCosts[this.tier]) * 100; // update progress
}

buyClickPower10() {
  this.count -= 100;
  this.clickPower += 10;
  this.progress = (this.count / this.tierCosts[this.tier]) * 100; // update progress
}

buyClickPower100() {
  this.count -= 10000;
  this.clickPower += 100;
  this.progress = (this.count / this.tierCosts[this.tier]) * 100; // update progress
}

buyClickPower1000() {
  this.count -= 100000;
  this.clickPower += 1000;
  this.progress = (this.count / this.tierCosts[this.tier]) * 100; // update progress
}

  click() {
    this.animate = true;
    this.count = Math.trunc(this.count + this.clickPower);
    this.count += this.clickPower;
    this.progress = (this.progress + this.clickPower / this.tierCosts[this.tier] * 100) % 100;
    setTimeout(() => {
      this.animate = false;
    }, 200); // remove the animate class after 0.2 seconds
  }
}

