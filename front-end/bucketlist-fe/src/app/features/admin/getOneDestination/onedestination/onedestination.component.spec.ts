import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedestinationComponent } from './onedestination.component';

describe('OnedestinationComponent', () => {
  let component: OnedestinationComponent;
  let fixture: ComponentFixture<OnedestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnedestinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnedestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
