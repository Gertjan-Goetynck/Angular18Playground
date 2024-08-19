import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch-test-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-switch-test-component.component.html',
  styleUrl: './ng-switch-test-component.component.css'
})
export class NgSwitchTestComponent {
  color: string = '';
}
