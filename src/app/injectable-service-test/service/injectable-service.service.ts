import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectableService {

  constructor() { }

  getInjectedText(): string {
    return "The injectable decorator can be used to make services injectable.<br/> This text is an example of it in action.<br/> Check the source code to see how this is done.";
  }
}
