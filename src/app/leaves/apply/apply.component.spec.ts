import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ApplyComponent } from './apply.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('ApplyComponent', () => {
  let component: ApplyComponent;
  let fixture: ComponentFixture<ApplyComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyComponent],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it('form should be invalid', async(() => {
    component.applyForm.controls['leaveType'].setValue('');
    component.applyForm.controls['leaveDuration'].setValue('');
    component.applyForm.controls['reason'].setValue('');

    expect(component.applyForm.invalid).toBeTruthy();
  }));

  it('form should be valid', async(() => {
    component.applyForm.controls['leaveType'].setValue('Sick');
    component.applyForm.controls['leaveDuration'].setValue('1');
    component.applyForm.controls['reason'].setValue('Suffering with fever');

    expect(component.applyForm.invalid).toBeFalsy();
  }));

  it('invalid value in leave type', async(() => {
    let errors = {};
    let leavetype = component.applyForm.controls['leaveType'];
    leavetype.setValue('Choose Leave Type');
    errors = leavetype.errors || {};

    expect(errors['dtrequired']).toBeTruthy();
  }));

  it('invalid value in leave duration', async(() => {
    let errors = {};
    let leaveduration = component.applyForm.controls['leaveDuration'];
    leaveduration.setValue('abcd');
    errors = leaveduration.errors || {};

    expect(errors['isnumber']).toBeTruthy();
  }));
});
