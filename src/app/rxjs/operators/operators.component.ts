import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {
  routes: string[] = ['filtering', 'transformation']

}
