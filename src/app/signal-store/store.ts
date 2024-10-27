import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSignal {
  userEmail = signal<string | null>(null);
  userLogin = signal<boolean | null>(null);

  updateIsUserLogin(isLogin: boolean) {
    this.userLogin.set(isLogin);
  }
  getIsLogin() {
    return this.userLogin;
  }
  updateEmailAddress(email: string) {
    this.userEmail.set(email);
  }
  getUserEmailAddress() {
    return this.userEmail;
  }
}
