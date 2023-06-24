import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellClientComponent } from './sell-client.component';

describe('SellClientComponent', () => {
  let component: SellClientComponent;
  let fixture: ComponentFixture<SellClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
