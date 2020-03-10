import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedsheetsComponent } from './tabbedsheets.component';

describe('TabbedsheetsComponent', () => {
  let component: TabbedsheetsComponent;
  let fixture: ComponentFixture<TabbedsheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedsheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
