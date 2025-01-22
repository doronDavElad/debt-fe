import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesDisplayDataComponent } from './invoices-display-data.component';

describe('InvoicesDisplayDataComponent', () => {
  let component: InvoicesDisplayDataComponent;
  let fixture: ComponentFixture<InvoicesDisplayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesDisplayDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
