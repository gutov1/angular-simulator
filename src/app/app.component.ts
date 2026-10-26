import { Component } from '@angular/core';
import { Color } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'Румтибет';

  constructor() {
    console.log('красный:', this.isPrimaryColor(Color.Red));
    this.saveLastVisit();
    this.saveVisitCount();
  }

  isPrimaryColor(color: Color): boolean {
    return color === Color.Red || color === Color.Green || color === Color.Blue;
  }

  saveLastVisit(): void {
    const date: string = new Date().toISOString();
    localStorage.setItem('lastVisit', date);
  }

  saveVisitCount(): void {
    const savedVisits: string | null = localStorage.getItem('visits');
    const count: number = savedVisits ? Number(savedVisits) : 0;
    localStorage.setItem('visits', String(count + 1));
  }
}