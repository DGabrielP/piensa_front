import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PetInfoComponent } from './pet-info.component';

describe('PetInfoComponent', () => {
  let component: PetInfoComponent;
  let fixture: ComponentFixture<PetInfoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PetInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
