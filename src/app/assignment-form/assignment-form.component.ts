import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import { formField } from '../model/gm.model';
import * as jsonData from '../to-render.json';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {
  gmForm: FormGroup;
  formControls: any;
  formData:formField[];
  constructor() { 
    this.gmForm = new FormGroup({});
    this.gmForm.addControl('name',new FormControl(''));

    this.formData=Array.from(jsonData);
    // console.log("JsonData Array :", this.formData);

    this.formData.forEach(formField=>{
      let validators = [];
      let defaultValue=null;
      if(formField.mandatory){
        validators.push(Validators.required);
      }
      if(formField.field=="email"){
        validators.push(Validators.email);
      }
      if(formField.type=="check"){
        defaultValue=false;
      }
      this.gmForm.addControl(formField.field,new FormControl(defaultValue,validators));
    });
  }

  ngOnInit(): void {
  //  console.log("initialized form:" , this.gmForm);   
  }

  onCheckBoxClick(event:any,fieldName:string):void{
    // console.log(event.target.checked);
    if(event && event.target && event.target.checked!=null && fieldName){
      if(this.gmForm && this.gmForm.controls && this.gmForm.controls[fieldName]){
        this.gmForm.controls[fieldName].patchValue(event.target.checked);
      }     
    }
  }

  onSubmit():void{
    console.log('Form valid: ', this.gmForm.valid);
    console.log('Form values: ', this.gmForm.value);
    if(this.gmForm.valid){
      this.gmForm.reset();
    }
  }

}
