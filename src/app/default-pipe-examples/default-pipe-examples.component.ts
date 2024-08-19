import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-default-pipe-examples',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, AsyncPipe],
  templateUrl: './default-pipe-examples.component.html',
  styleUrl: './default-pipe-examples.component.css'
})
export class DefaultPipeExamplesComponent {
  numberSubject: BehaviorSubject<number> = new BehaviorSubject(1);

  addNumberToObservable() {
    this.numberSubject.next(1 + this.numberSubject.getValue());
  }
}
