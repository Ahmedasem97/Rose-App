import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetSignalService {

  constructor() { }

  private dataSignal = signal<number | null>(null);
  private userEmail = signal<string >("");

  getCurrentStep() {
    return this.dataSignal();
  }

  setStep(value: number | null) {
    this.dataSignal.set(value);
  }

  getUserEmail() {
    return this.userEmail();
  }

  setUserEmail(value: string) {
    this.userEmail.set(value);
  }
}
