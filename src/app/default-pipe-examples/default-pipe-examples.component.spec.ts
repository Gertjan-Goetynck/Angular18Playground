import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPipeExamplesComponent } from './default-pipe-examples.component';

describe('DefaultPipeExamplesComponent', () => {
  let component: DefaultPipeExamplesComponent;
  let fixture: ComponentFixture<DefaultPipeExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultPipeExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPipeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
