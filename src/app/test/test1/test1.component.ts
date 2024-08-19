import { Component } from '@angular/core';
import { StandaloneTestComponent } from '../../standalone-test/standalone-test.component';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [StandaloneTestComponent],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {

}
