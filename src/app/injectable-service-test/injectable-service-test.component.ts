import { Component, inject } from '@angular/core';
import { InjectableService } from './service/injectable-service.service';

@Component({
  selector: 'app-injectable-service-test',
  standalone: true,
  imports: [],
  templateUrl: './injectable-service-test.component.html',
  styleUrl: './injectable-service-test.component.css'
})
export class InjectableServiceTestComponent {
  injectableService = inject(InjectableService);

  get injectedServiceText(): string {
    return this.injectableService.getInjectedText();
  }
}
