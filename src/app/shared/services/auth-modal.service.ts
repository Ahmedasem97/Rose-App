import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthModalService {

  constructor() { }

    private dataSignal = signal<string>("");
  
    getCurrentStep() {
      return this.dataSignal();
    }
  
    setStep(value: string) {
      this.dataSignal.set(value);
    }
}
