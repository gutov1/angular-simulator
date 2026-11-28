import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { OfferFeature } from '../app/OfferFeature';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  companyName: string = 'Румтибет'

  selectedLocation: string = '';
  selectedDate: string = '';
  selectedParticipants: string = '';

  features: OfferFeature[] = [
    {
      id: 1,
      icon: '/images/offers/guide-icon.svg',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      icon: '/images/offers/shield-icon.svg',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      icon: '/images/offers/price-tag-icon.svg',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
  ]

  constructor() {
    console.log('красный:', this.isPrimaryColor(Color.RED));
    this.saveLastVisit();
    this.saveVisitCount();
  }

  get isSearchDisabled(): boolean {
    return !this.selectedLocation || !this.selectedDate || !this.selectedParticipants;
  }

  private isPrimaryColor(color: Color): boolean {
    return color === Color.RED || color === Color.GREEN || color === Color.BLUE;
  }

  private saveLastVisit(): void {
    const date: string = new Date().toISOString();
    localStorage.setItem('lastVisit', date);
  }

  private saveVisitCount(): void {
    const savedVisits: string | null = localStorage.getItem('visits');
    const count: number = savedVisits ? Number(savedVisits) : 0;
    localStorage.setItem('visits', String(count + 1));
  }

}
