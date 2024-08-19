import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-state-management',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.css'
})
export class StateManagementComponent {
  readonly routes: string[] = ['inputOutput', 'inputSignalOutput', 'model']

}
