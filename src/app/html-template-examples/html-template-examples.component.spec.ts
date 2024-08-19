import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTemplateExamplesComponent } from './html-template-examples.component';

describe('HtmlTemplateExamplesComponent', () => {
  let component: HtmlTemplateExamplesComponent;
  let fixture: ComponentFixture<HtmlTemplateExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlTemplateExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlTemplateExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
