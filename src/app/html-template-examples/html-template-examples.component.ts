import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-html-template-examples',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './html-template-examples.component.html',
  styleUrl: './html-template-examples.component.css'
})
export class HtmlTemplateExamplesComponent {
  readonly routes: string[] = ['ifElse', 'forLoop', 'ngSwitch', 'defer', 'defaultPipes']

}
