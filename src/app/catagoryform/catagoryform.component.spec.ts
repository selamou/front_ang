import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryformComponent } from './catagoryform.component';

describe('CatagoryformComponent', () => {
  let component: CatagoryformComponent;
  let fixture: ComponentFixture<CatagoryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
