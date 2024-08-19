import { Component, input, InputSignal, output, OutputEmitterRef, Signal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  inputSignalTest = input();
  outputFnTest = output();
  handleClick() {
    this.outputFnTest.emit()
  }
}
