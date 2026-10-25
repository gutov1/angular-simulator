import { Component } from '@angular/core';
import {Color} from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    console.log('красный:', this.isRGB(Color.Red));
    this.saveLastVisit();
    this.saveVisitCount();
  }
  companyName: string = 'Румтибет';

  isRGB(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }
  
  saveLastVisit(): void {
    const date = new Date().toISOString();
    localStorage.setItem('lastVisit', date);
  }

  saveVisitCount(): void {
    const savedVisits = localStorage.getItem('visits');
    const count = savedVisits ? Number(savedVisits) : 0;
    localStorage.setItem('visits', String(count + 1));
  }
}
