import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDestinationPrivateComponent } from './delete-destination-private.component';

describe('DeleteDestinationPrivateComponent', () => {
  let component: DeleteDestinationPrivateComponent;
  let fixture: ComponentFixture<DeleteDestinationPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDestinationPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDestinationPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
