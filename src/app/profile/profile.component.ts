import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {finalize} from'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imgSrc:string='assets/images/d.png';
  selsectedimg:any=null;
  isSubmit:boolean=false;

  formTemplate = new FormGroup({
   imageUrl: new FormControl('',Validators.required)
  })
  constructor(private storage:AngularFireStorage) {

   }
showreview(event:any){

  if (event.target.files && event.target.files[0]){
    const reader= new FileReader();
    reader.onload=(e:any)=> this.imgSrc= e.target.result;
    reader.readAsDataURL( event.target.files[0]);
    this.selsectedimg= event.target.files[0];
  }
  else{
    this.imgSrc='assets/images/d.png';
    this.selsectedimg=null;
  }

}
onSubmit(formValue:any){
  this.isSubmit=true;
  if(this.formTemplate.valid){
     var filePath=`${this.selsectedimg.name}_${new Date().getTime()}`;
     const fileRef = this.storage.ref(filePath);
     this.storage.upload(filePath,this.selsectedimg).percentageChanges().pipe(
       finalize(()=>{
         fileRef.getDownloadURL().subscribe((url)=>{
              formValue['imageUrl']= url;
                this.resetForm();
         });
       })
     ).subscribe();
  }

}
get formControls(){
  return this.formTemplate['controls'];
}
resetForm(){
  this.formTemplate.reset();
  this.formTemplate.setValue({
    imageUrl:''
  });
  this.imgSrc='assets/images/d.png';
  this.isSubmit=false;
  this.selsectedimg=null;
}
  ngOnInit(){
    this.resetForm();
  }

}
