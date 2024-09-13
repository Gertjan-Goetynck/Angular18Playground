import { Component, OnInit } from '@angular/core';
import { ServiceState } from '../service.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  constructor(private service: ServiceState) {

  }

  ngOnInit(): void {
    this.service.loadData();
  }
}
