import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationComponent } from './tranformation.component';

describe('TranformationComponent', () => {
  let component: TransformationComponent;
  let fixture: ComponentFixture<TransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
