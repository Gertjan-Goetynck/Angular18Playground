import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchTestComponentComponent } from './ng-switch-test-component.component';

describe('NgSwitchTestComponentComponent', () => {
  let component: NgSwitchTestComponentComponent;
  let fixture: ComponentFixture<NgSwitchTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitchTestComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
