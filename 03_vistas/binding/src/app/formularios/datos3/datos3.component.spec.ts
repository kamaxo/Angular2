import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datos3Component } from './datos3.component';

describe('Datos3Component', () => {
  let component: Datos3Component;
  let fixture: ComponentFixture<Datos3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datos3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
