import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoWayDataBindingComponent } from './tho-way-data-binding.component';

describe('ThoWayDataBindingComponent', () => {
  let component: ThoWayDataBindingComponent;
  let fixture: ComponentFixture<ThoWayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoWayDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
