import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAppItemComponent } from './first-app-item.component';

describe('FirstAppItemComponent', () => {
  let component: FirstAppItemComponent;
  let fixture: ComponentFixture<FirstAppItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAppItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAppItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
