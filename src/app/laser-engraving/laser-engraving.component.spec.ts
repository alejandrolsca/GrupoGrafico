/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaserEngravingComponent } from './laser-engraving.component';

describe('LaserEngravingComponent', () => {
  let component: LaserEngravingComponent;
  let fixture: ComponentFixture<LaserEngravingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserEngravingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserEngravingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
