import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruyenCuoiComponent } from './truyen-cuoi.component';

describe('TruyenCuoiComponent', () => {
  let component: TruyenCuoiComponent;
  let fixture: ComponentFixture<TruyenCuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruyenCuoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruyenCuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
