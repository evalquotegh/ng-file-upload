import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const [file] = event.target.files;
    console.log(file);
  }
}
