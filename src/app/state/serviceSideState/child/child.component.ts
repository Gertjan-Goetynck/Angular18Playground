import { Component, computed, OnInit, Signal } from '@angular/core';
import { Data, ServiceState } from '../service.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  data: Signal<Data>;
  constructor(private service: ServiceState) { }

  ngOnInit(): void {
    this.data = this.service.getData();
  }

  changeState() {
    this.service.updateData('Updated');
  }
}
