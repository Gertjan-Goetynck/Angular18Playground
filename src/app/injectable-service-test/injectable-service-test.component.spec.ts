import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableServiceTestComponent } from './injectable-service-test.component';

describe('InjectableServiceTestComponent', () => {
  let component: InjectableServiceTestComponent;
  let fixture: ComponentFixture<InjectableServiceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectableServiceTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectableServiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
