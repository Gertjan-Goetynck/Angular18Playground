import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  modelTest = model<string>('');


  handleClick() {
    this.modelTest.update((string) => 'Model updated through a click');
  }
}
