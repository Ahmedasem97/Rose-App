import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalControlerService {

  private isOpen: WritableSignal<boolean> = signal(false)
  constructor() { }

  setModalStatus(value: boolean){
    this.isOpen.set(value)
  }

  getModalStatus(): boolean {
    return this.isOpen()
  }
}
