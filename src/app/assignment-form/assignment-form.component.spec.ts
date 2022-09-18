import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFormComponent } from './assignment-form.component';

describe('AssignmentFormComponent', () => {
  let component: AssignmentFormComponent;
  let fixture: ComponentFixture<AssignmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
  it('should onCheckBoxClick sets true', () => {
    let event={
      target:{
        checked:true
      }
    }
    component.onCheckBoxClick(event,"confirm");
    expect(component.gmForm.controls['confirm'].value).toBeTruthy();
  });

  it('should onCheckBoxClick sets false', () => {
    let event={
      target:{
        checked:false
      }
    }
    component.onCheckBoxClick(event,"confirm");
    expect(component.gmForm.controls['confirm'].value).toBeFalsy();
  });

   it('should check form title', () => {
    const fixture = TestBed.createComponent(AssignmentFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Assignment Form');
  });

  
});
