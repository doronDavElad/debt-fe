import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncoivesSummaryComponent } from './incoives-summary.component';

describe('IncoivesSummaryComponent', () => {
  let component: IncoivesSummaryComponent;
  let fixture: ComponentFixture<IncoivesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncoivesSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncoivesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
