import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './file-upload.model';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private httpClient: HttpClient) {}

  uploadFile(file: File, fileName: string): Observable<Image> {
    const url = 'https://api.cloudinary.com/v1_1/evalquote/image/upload';
    const formData = new FormData();

    console.log(file, fileName);
    formData.append('file', file, fileName);
    formData.append('upload_preset', 'dqgb6v4t');

    return this.httpClient.post<Image>(url, formData);
  }
}
