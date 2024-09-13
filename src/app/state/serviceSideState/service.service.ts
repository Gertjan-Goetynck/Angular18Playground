import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Data {
  content: string;
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceState {
  private data = signal<Data>({ content: '', isLoading: false });
  getData() {
    return this.data.asReadonly();
  }
  updateData(content: any) {
    this.data.update((data) => { return { ...data, content } });
  }

  loadData() {
    this.data.update(data => {
      return { ...data, isLoading: true };
    });
    //Simulates a backend call to an API
    setTimeout(() => {
      this.data.update(() => { return { content: 'Test', isLoading: false } })
    }, 5000);
  }
}
