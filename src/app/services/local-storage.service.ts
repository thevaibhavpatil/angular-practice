import { EventEmitter } from '@angular/core';

export class LocalStorageService {

  private prgEm: EventEmitter<number>;

  constructor() {
    this.prgEm = new EventEmitter();
  }

  emitProgress(progress: number) {
    this.prgEm.emit(progress);
  }
  subscribeProgress(callBack: (prg: number) => void) {
    this.prgEm.subscribe(prog => callBack(prog));
  }
}