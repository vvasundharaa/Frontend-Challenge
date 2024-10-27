import { Component, inject } from '@angular/core';
import { UserSignal } from '../signal-store/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  userSignal = inject(UserSignal);

  userEmail = this.userSignal.getUserEmailAddress();
}
