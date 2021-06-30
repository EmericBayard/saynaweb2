import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSidebarHeaderComponent } from './middle-sidebar-header.component';

describe('MiddleSidebarHeaderComponent', () => {
  let component: MiddleSidebarHeaderComponent;
  let fixture: ComponentFixture<MiddleSidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleSidebarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
