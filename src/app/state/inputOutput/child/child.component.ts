import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() inputTest: string = '';
  @Output() testOutput: EventEmitter<any> = new EventEmitter<any>();

  handleClick() {
    this.testOutput.emit();
  }
}
