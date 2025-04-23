import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoicesListTemplateComponent } from './invoices-list-template.component';

describe('InvoicesListTemplateComponent', () => {
  let component: InvoicesListTemplateComponent;
  let fixture: ComponentFixture<InvoicesListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesListTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoicesListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
