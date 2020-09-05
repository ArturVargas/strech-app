import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarConfigComponent } from './calendar-config.component';

describe('CalendarConfigComponent', () => {
  let component: CalendarConfigComponent;
  let fixture: ComponentFixture<CalendarConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
