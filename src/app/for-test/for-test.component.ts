import { Component } from '@angular/core';

@Component({
  selector: 'app-for-test',
  standalone: true,
  imports: [],
  templateUrl: './for-test.component.html',
  styleUrl: './for-test.component.css'
})
export class ForTestComponent {
  testArray: string[] = ['forTest1', 'forTest2', 'forTest3'];
}
