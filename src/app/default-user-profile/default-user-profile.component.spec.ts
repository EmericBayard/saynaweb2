import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultUserProfileComponent } from './default-user-profile.component';

describe('DefaultUserProfileComponent', () => {
  let component: DefaultUserProfileComponent;
  let fixture: ComponentFixture<DefaultUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
