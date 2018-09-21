import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPageComponent } from './access-page.component';

describe('AccessPageComponent', () => {
  let component: AccessPageComponent;
  let fixture: ComponentFixture<AccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
