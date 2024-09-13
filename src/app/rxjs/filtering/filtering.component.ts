import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, find, first, from, fromEvent, ignoreElements, interval, last, mergeMap, of, ReplaySubject, skip, Subject, Subscription, take, takeUntil, throwError } from 'rxjs';

@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [],
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.css'
})
export class FilteringComponent implements OnInit, OnDestroy {
  //this method is a common used way to unsubscribe from observables that don't auto unsubscribe. This is needed to avoid memory leaks
  private readonly destroy$ = new ReplaySubject<void>();

  distinctObservable = of(1, 2, 3, 4, 5, 4, 1, 2, 3, 6);
  distinctSubscription: Subscription;

  distinctUntilChangedObservable = of(1, 2, 3, 4, 4, 4, 4, 4, 4, 5, 4, 1, 2, 3, 6);

  distinctUntilKeyChangedObservable = from([
    { id: 1, value: 'canBeIdentical' },
    { id: 1, value: 'canBeIdentical' },
    { id: 2, value: 'canBeIdentical' },
    { id: 2, value: 'canBeIdentical' },
    { id: 3, value: 'canBeIdentical' },
    { id: 3, value: 'canBeIdentical' },
  ])

  filterObservable = from([
    { name: 'John', age: 17 },
    { name: 'Dhoe', age: 18 },
    { name: 'Jane', age: 17 },
    { name: 'Dhane', age: 17 },
    { name: 'Ben', age: 21 }
  ])

  findObservable = of(1, 4, 7, 2, 3);

  firstObservable = of(57, 4, 7, 2, 3);

  ignoreElementsObservable = interval(100);

  lastObservable = of(57, 4, 7, 2, 3);

  skipObservable = interval(1000);

  ngOnInit(): void {
    console.log('Distinct')
    this.distinctSubscription = this.distinctObservable.pipe(
      distinct(),
      takeUntil(this.destroy$)
    ).subscribe(value => console.log(value));

    console.log('DistinctUntilChanged');
    this.distinctObservable.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(value => console.log(value));

    console.log('DistinctUntilKeyChanged');
    this.distinctUntilKeyChangedObservable.pipe(
      distinctUntilKeyChanged('id'),
      takeUntil(this.destroy$)
    ).subscribe(value => console.log(value));

    console.log('Filter');
    this.filterObservable.pipe(
      filter(value => value.age >= 18),
      takeUntil(this.destroy$)
    ).subscribe(value => console.log(value));

    console.log('Find');
    this.findObservable.pipe(
      find(value => value % 2 === 0),
      takeUntil(this.destroy$)
    ).subscribe(value => console.log(value));

    console.log('First');
    this.firstObservable.pipe(
      first(),
      takeUntil(this.destroy$)
    ).subscribe(value => console.log(value));

    // console.log('IgnoreElements')
    // this.ignoreElementsObservable.pipe(
    //   mergeMap(val => {
    //     if (val === 4) {
    //       throw new Error(`ERROR AT ${val}`);
    //     }
    //     return of(val);
    //   }),
    //   ignoreElements()
    // ).subscribe(() => console.log("Emited value"));

    console.log('Last');
    this.lastObservable.pipe(
      last(),
      takeUntil(this.destroy$)
    ).subscribe(value => console.log(value));

    console.log('Last with predicate');
    this.lastObservable.pipe(
      last(value => value % 2 === 0),
      takeUntil(this.destroy$)
    ).subscribe(value => console.log(value));

    // console.log('Skip');
    // this.skipObservable.pipe(
    //   skip(2),
    //   takeUntil(this.destroy$)
    // ).subscribe(value => console.log(value));

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log(this.distinctSubscription);
  }
}
