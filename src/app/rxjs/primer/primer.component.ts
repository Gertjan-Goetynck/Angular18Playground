import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { filter, fromEvent, map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-primer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './primer.component.html',
  styleUrl: './primer.component.css'
})
export class PrimerComponent implements OnInit, OnDestroy {
  //SUBSCRIPTIONS
  @ViewChild('myButton', { static: true }) myButton: ElementRef;
  myObservable: Observable<any>;
  mySubscription: Subscription;
  mySecondSubscription: Subscription;

  //OPERATORS
  dataSource: Observable<number> = of(1, 2, 3, 4, 5);
  numbers: number[] = [];
  dataSourceSubscription: Subscription;



  ngOnInit(): void {
    //SUBSCRIPTIONS
    this.myObservable = fromEvent(this.myButton.nativeElement, 'click');
    this.mySubscription = this.myObservable.subscribe({
      next: event => console.log(event),
      error: error => console.log(error),
      complete: () => console.log('completed')
    });

    this.mySecondSubscription = this.myObservable.subscribe(event => console.log(event));

    //OPERATORS
    this.dataSourceSubscription = this.dataSource.pipe(
      map(value => value * 10),
      filter(value => (value / 10) % 2 === 0)
    ).subscribe(value => this.numbers.push(value));

  }

  ngOnDestroy(): void {
    //SUBSCRIPTIONS
    console.log(`mySubscription:`);
    console.log(this.mySubscription)
    console.log(`mySecondSubscription:`);
    console.log(this.mySecondSubscription);
    console.log(`unsubscribed mySubscription:`);
    this.mySubscription.unsubscribe();
    console.log(this.mySubscription)
    console.log(`unsubscribed mySecondSubscription:`);
    this.mySecondSubscription.unsubscribe();
    console.log(this.mySecondSubscription);
  }
}
