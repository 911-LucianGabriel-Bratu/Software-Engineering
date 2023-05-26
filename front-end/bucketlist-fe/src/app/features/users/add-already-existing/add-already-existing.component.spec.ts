import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlreadyExistingComponent } from './add-already-existing.component';

describe('AddAlreadyExistingComponent', () => {
  let component: AddAlreadyExistingComponent;
  let fixture: ComponentFixture<AddAlreadyExistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlreadyExistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAlreadyExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
