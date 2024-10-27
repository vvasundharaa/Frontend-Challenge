import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserSignal } from '../signal-store/store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  userSignal = inject(UserSignal);
  isUserLogin = this.userSignal.getIsLogin();
  userName = this.userSignal.getUserEmailAddress();
}
