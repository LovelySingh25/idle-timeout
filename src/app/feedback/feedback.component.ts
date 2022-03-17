import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  //name = 'Feedback';
  //formGroup: FormGroup
  feedbackForm: FormGroup;
  selectedCat: any[];
  msg: any;
  submitted = false; 
  public category: Array<any>;

  constructor(private formBuilder: FormBuilder) {
    // this.formGroup = new FormGroup({
    //   emailField: new FormControl('', [Validators.required, Validators.email]),
    //   feedbackField: new FormControl('', [
    //     Validators.required, 
    //     Validators.minLength(25), 
    //     Validators.maxLength(3000)
    //   ])
    // })
    this.category = [
      { id: 1, value: 'design' },
      { id: 2, value: 'functionality' },
      { id: 3, value: 'performance' }
    ];
    this.selectedCat = this.category[0].id;
   }

  ngOnInit() {
    this.createForm();
  }
  createForm() {    
    this.feedbackForm = this.formBuilder.group({
      msg: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
      category: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
;
    this.feedbackForm.controls["category"].setValue(this.selectedCat);
  }

  sendFeedback() {
    this.submitted = true;
    
    if (this.feedbackForm.invalid) {
      return;
    }
    else{
      this.msg = 'Your feedback is submitted successfully';
      console.log(this.feedbackForm.value);
    }

  }
  // getErrorMessage(control: AbstractControl): string {
  //   if (!control || control.valid) {
  //     return '';
  //   }

  //   // Required always comes first
  //   if (control.hasError('required')) {
  //     return "Cannot be empty";
  //   }
  //   if (control.hasError('email')) {
  //     return "Must be a valid email";
  //   }
  //   if (control.hasError('minlength')) {
  //     const limit = control.getError('minlength').requiredLength;
  //     return `Must be at least ${limit} characters`;
  //   }
  //   if (control.hasError('minlength')) {
  //     const limit = control.getError('maxlength').requiredLength;
  //     return `Must be no more than ${limit} characters`;
  //   }

  //   return "Invalid input";
  // }
  // onSubmit(){
  //   this.formGroup.reset()
  // }

  // get emailField(): AbstractControl {
  //   return this.formGroup.get('emailField');
  // }

  // get feedbackField(): AbstractControl {
  //   return this.formGroup.get('feedbackField');
  

  // }
}
