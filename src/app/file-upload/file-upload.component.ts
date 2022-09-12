import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Image } from './file-upload.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const formData = new FormData();
    const url = 'https://api.cloudinary.com/v1_1/evalquote/image/upload';

    if (files) {
      formData.append('file', files[0]);
      formData.append('upload_preset', 'dqgb6v4t');

      this.httpClient
        .post<Image>(url, formData)
        .subscribe((response) => console.log(response));
    }
  }
}
