/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VisuprodComponent } from './visuprod.component';

describe('VisuprodComponent', () => {
  let component: VisuprodComponent;
  let fixture: ComponentFixture<VisuprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
