import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
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

  addImage(image: Image): Observable<Image> {
    const id = uuidv4(); // id is a json-server requirement for POST operation to work
    const url = 'http://localhost:3000/images';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({ id, ...image });
    return this.httpClient.post<Image>(url, body, { headers });
  }
}
