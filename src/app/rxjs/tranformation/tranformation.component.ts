import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, delay, filter, from, fromEvent, groupBy, map, mapTo, mergeMap, Observable, of, pluck, reduce, scan, Subject, take, takeUntil, toArray, zip } from 'rxjs';

@Component({
  selector: 'app-tranformation',
  standalone: true,
  imports: [],
  templateUrl: './tranformation.component.html',
  styleUrl: './tranformation.component.css'
})
export class TransformationComponent implements OnInit, OnDestroy {
  @ViewChild('bufferStopButton', { static: true }) bufferStopButton: ElementRef;
  $destroy: Subject<void> = new Subject<void>;

  documentClicks = fromEvent(document, 'click');
  documentMouseDown = fromEvent(document, 'mousedown');
  documentMouseUp = fromEvent(document, 'mouseup');
  documentMouseMove = fromEvent(document, 'mousemove');
  documentRightClick = fromEvent(document, 'contextmenu');
  concatMap = of(2000, 1000);
  people = from([
    { id: 1, name: 'John' },
    { id: 2, name: 'Dhoe' },
    { id: 3, name: 'Dhoe' },
    { id: 4, name: 'John' },
  ]);



  stopBufferbuttonClicked: Observable<any>;

  ngOnInit(): void {
    // console.log('Buffer');
    // this.documentClicks.pipe(
    //   buffer(this.documentClicks.pipe(delay(1000))),
    //   filter(array => array.length > 0),
    //   takeUntil(this.$destroy)
    // ).subscribe(array => console.log(array));

    // console.log('BufferCount');
    // this.documentClicks.pipe(
    //   bufferCount(5),
    //   takeUntil(this.$destroy)
    // ).subscribe(array => console.log(array));

    // console.log('BufferTime');
    // this.documentClicks.pipe(
    //   bufferTime(1000),
    //   takeUntil(this.$destroy)
    // ).subscribe(array => console.log(array));

    // console.log('BufferToggle');
    // this.documentMouseMove.pipe(
    //   bufferToggle(this.documentMouseDown, _ => this.documentMouseUp),
    //   takeUntil(this.$destroy)
    // ).subscribe(console.log);

    // console.log('BufferWhen');
    // this.stopBufferbuttonClicked = fromEvent(this.bufferStopButton.nativeElement, 'click');
    // this.documentRightClick.pipe(
    //   bufferWhen(() => this.stopBufferbuttonClicked),
    //   takeUntil(this.$destroy)
    // ).subscribe(console.log);

    console.log('GroupBy property');
    this.people.pipe(
      groupBy(person => person.name),
      mergeMap(group => group.pipe(toArray(), takeUntil(this.$destroy))),
      takeUntil(this.$destroy)
    ).subscribe(console.log);

    console.log('GroupBy key - value');
    this.people.pipe(
      groupBy(person => person.name, p => p.id),
      mergeMap(group => zip(of(group.key), group.pipe(toArray(), takeUntil(this.$destroy)))),
      takeUntil(this.$destroy)
    ).subscribe(console.log);

    console.log("Map");
    this.people.pipe(
      map(person => person.name),
      takeUntil(this.$destroy)
    ).subscribe(console.log);


    console.log("Reduce");
    this.people.pipe(
      map(person => person.name),
      reduce((value1, value2) => `${value1},${value2}`),
      takeUntil(this.$destroy)
    ).subscribe(console.log);

    console.log("Scan");
    this.people.pipe(
      map(person => person.name),
      scan((value1, value2) => `${value1},${value2}`),
      takeUntil(this.$destroy)
    ).subscribe(console.log)

  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }

}
