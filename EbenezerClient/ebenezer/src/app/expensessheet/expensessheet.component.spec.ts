import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensessheetComponent } from './expensessheet.component';

describe('ExpensessheetComponent', () => {
  let component: ExpensessheetComponent;
  let fixture: ComponentFixture<ExpensessheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensessheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensessheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
