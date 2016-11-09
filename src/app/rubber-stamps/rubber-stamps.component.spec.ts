/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RubberStampsComponent } from './rubber-stamps.component';

describe('RubberStampsComponent', () => {
  let component: RubberStampsComponent;
  let fixture: ComponentFixture<RubberStampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubberStampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubberStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
