import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeRegisterComponent } from './edite-register.component';

describe('EditeRegisterComponent', () => {
  let component: EditeRegisterComponent;
  let fixture: ComponentFixture<EditeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
