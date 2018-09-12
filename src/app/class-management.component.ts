import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { ClassManagementService } from './class-management.service';
//import { Class } from './class';
 //import { Method } from './method';
 //import { Field } from './field';
//import { Import } from './import';

@Component({
  selector: 'app-class',	
  templateUrl: './class-management.component.html'
})
export class ClassManagementComponent implements OnInit {
    public message = "Sucess";
    public message1="Are you sure to delete";
    public message2="Do you need to add";
    public message3="form is not valid, cannot save to database,add required properties";
      public message4="form is already submitted";
  classForm:FormGroup;
  formSubmitted = false;
  //allSkills: Observable<any[]>
  constructor(
          private formBuilder:FormBuilder,
          private classMngService: ClassManagementService) { 
              this.createClassForm();
  }
  ngOnInit() {
	  //this.allSkills = this.classMngService.getSkills();
  	  this.createClassForm();
	 // this.addMethod();
      //this.addField();
      //this.addImport();
  }
  
  createClassForm(){
	  this.classForm = this.formBuilder.group({
	  	 className: ['', Validators.required ],
		 packageName: ['',Validators.required],
		 fields: this.formBuilder.array([
            this.createFields()
         ]),
	         methods: this.formBuilder.array([this.createMethods()]),
             imports: this.formBuilder.array([this.createImports()]) 
	  }); 
  }
  createFields(): FormGroup {
  return this.formBuilder.group({
    fieldType: ['',Validators.required],
    fieldName: ['',Validators.required],
    visibility:'',
    modifiers:'',
    initCode:''
   
  });
}
createMethods(): FormGroup {
  return this.formBuilder.group({
    methodName: ['',Validators.required],
    methodReturnType: ['',Validators.required],
    methodCode:['',Validators.required],
    visibility:['',Validators.required],
    modifier:['',Validators.required]
   
  });
}
createImports(): FormGroup {
  return this.formBuilder.group({
    importedClass: ['',Validators.required]
    
   
  });
}
 
  get fieldFormArray(): FormArray{
	  return this.classForm.get('fields') as FormArray;
  }
//   addField(){
// 	  let fg = this.formBuilder.group(new Field());
// 	  this.fieldFormArray.push(fg);	  
//   }
get methodFormArray(): FormArray{
	  return this.classForm.get('methods') as FormArray;
  }
addField() {
    alert(this.message2);
let fields = this.classForm.get('fields') as FormArray;
  this.fieldFormArray.push(this.createFields());
}
 deleteField(i: number) {
      alert(this.message1);
 	  this.fieldFormArray.removeAt(i);
   }
   addMethod() {
        alert(this.message2);
  let methods = this.classForm.get('methods') as FormArray;
  this.methodFormArray.push(this.createMethods());
}
 deleteMethod(i: number) {
      alert(this.message1);
 	  this.methodFormArray.removeAt(i);
   }
  
//   addMethod(){
// 	  let fg = this.formBuilder.group(new Method());
// 	  this.methodFormArray.push(fg);	  
//   }
//   deleteMethod(idx: number) {
// 	  this.methodFormArray.removeAt(idx);
//   }
  get importFormArray(): FormArray{
	  return this.classForm.get('imports') as FormArray;
  }
  addImport(){
       alert(this.message2);
	  let imports = this.classForm.get('imports') as FormArray;
	  this.importFormArray.push(this.createImports());	  
  }
  deleteImport(i: number) {
      alert(this.message1);
	  this.importFormArray.removeAt(i);
  }
//   loadClass(name: string) {
// 	  this.classMngService.getClassByName(name)
// 	     .subscribe( classes => {
// 			this.createFormWithDefaultData(classes);
// 		 });
//   }  
//   createFormWithDefaultData(classes: Class) {
// 	  //this.teamForm.patchValue(team); 	  
// 	  this.classForm.patchValue({
// 		className: classes.className,
// 		packageName: classes.packageName,
// 		//fields: classes.field
// 	  });  
    //   let fieldFormGroups = classes.fields.map(field => this.formBuilder.group(field));
    //       let fieldFormArray = this.formBuilder.array(fieldFormGroups);
    //       this.classForm.setControl('fields', fieldFormArray);
	//   let methodFormGroups = classes.methods.map(method => this.formBuilder.group(method));
    //       let methodFormArray = this.formBuilder.array(methodFormGroups);
    //       this.classForm.setControl('methods', methodFormArray);
    //   let importFormGroups = classes.imports.map(import => this.formBuilder.group(import));
    //       let importFormArray = this.formBuilder.array(importFormGroups);
    //       this.classForm.setControl('imports', importFormArray);
  
//   onFormSubmit() {
//           let data = JSON.stringify(this.classForm.value);
// 	  console.log('-----Class in JSON Format-----');
// 	  console.log(data);
// 	  let classes: Class = this.classForm.value;
// 	  this.classMngService.saveClass(classes);
// 	  this.formSubmitted = true;
// 	  this.classForm.reset();	  
//   }  
onFormSubmit(){
    // this.classForm.patchValue({
      
    //  imports:[ {
    //     importedClass: ''
    //   }]
    // });
      //$event.preventDefault();
    if (this.classForm.status != 'VALID') {
         alert(this.message3);
    }else{
        alert(this.message);
    }
     
    if (this.classForm.status != 'VALID') {
      console.log('form is not valid, cannot save to database')
      return
    }
   console.log(this.classForm.value);
    this.classMngService.onFormSubmit(this.classForm.valid && this.classForm.value).subscribe(
            //   response => {
            //       this.classForm = response;
            //        console.log(response); 
            //   })
    )
  }
}
  
//   resetClassForm() {
// 	  this.classForm.reset({
// 		  className: '',
// 		  packageName: ''
// 	  });
//   }
 