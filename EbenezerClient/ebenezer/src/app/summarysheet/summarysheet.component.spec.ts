import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarysheetComponent } from './summarysheet.component';

describe('SummarysheetComponent', () => {
  let component: SummarysheetComponent;
  let fixture: ComponentFixture<SummarysheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarysheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarysheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
