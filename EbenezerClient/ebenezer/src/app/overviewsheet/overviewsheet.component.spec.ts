import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewsheetComponent } from './overviewsheet.component';

describe('OverviewsheetComponent', () => {
  let component: OverviewsheetComponent;
  let fixture: ComponentFixture<OverviewsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
