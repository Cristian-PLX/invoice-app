import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoicesDetailTemplateComponent } from './home.component';

describe('InvoicesDetailTemplateComponent', () => {
  let component: InvoicesDetailTemplateComponent;
  let fixture: ComponentFixture<InvoicesDetailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesDetailTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvoicesDetailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
