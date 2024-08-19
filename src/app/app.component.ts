import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StandaloneTestComponent } from './standalone-test/standalone-test.component';
import { ForTestComponent } from './for-test/for-test.component';
import { IfElseTestComponent } from './if-else-test/if-else-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StandaloneTestComponent, ForTestComponent, IfElseTestComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'playgroundProject';
  readonly routes: string[] = ['standaloneComponent', 'ifElse', 'forLoop', 'defer', 'injectableService', 'defaultPipes']
}
