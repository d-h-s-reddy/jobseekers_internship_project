import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavibarComponent } from './unavibar.component';

describe('UnavibarComponent', () => {
  let component: UnavibarComponent;
  let fixture: ComponentFixture<UnavibarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnavibarComponent]
    });
    fixture = TestBed.createComponent(UnavibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
