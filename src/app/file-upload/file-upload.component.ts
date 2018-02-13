import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'yc-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent implements OnInit {

  form: FormGroup;
  constructor() {
    // form: fb.group({ file: null });
  }
  ngOnInit() {
  }
  //fVals comes from HTML Form -> (ngSubmit)="postImage(form.value)" 
 /*  postImage(fVals) {
    let body = new FormData();
    body.append('file', formValues.file);

    let httpRequest = httpclient.post(url, body);
    httpRequest.subscribe((response) => {
      //..... handle response here
    }, (error) => {
      //.....handle errors here
    });
  }
 */
  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log('file',file);
      
      this.form.get('file').setValue(file);
    }
  }

}
