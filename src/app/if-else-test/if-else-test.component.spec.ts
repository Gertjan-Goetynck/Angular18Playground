import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseTestComponent } from './if-else-test.component';

describe('IfElseTestComponent', () => {
  let component: IfElseTestComponent;
  let fixture: ComponentFixture<IfElseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
