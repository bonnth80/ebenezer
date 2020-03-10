import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionssheetComponent } from './transactionssheet.component';

describe('TransactionssheetComponent', () => {
  let component: TransactionssheetComponent;
  let fixture: ComponentFixture<TransactionssheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionssheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionssheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
