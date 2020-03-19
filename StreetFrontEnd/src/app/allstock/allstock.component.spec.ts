import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstockComponent } from './allstock.component';

describe('AllstockComponent', () => {
  let component: AllstockComponent;
  let fixture: ComponentFixture<AllstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
