import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../file-upload/file-upload.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private httpClient: HttpClient) {}

  getImageList(): Observable<Image[]> {
    const url = 'http://localhost:3000/images';
    return this.httpClient.get<Image[]>(url);
  }
}
