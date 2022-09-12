import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from '../file-upload/file-upload.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-images',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  public imageList$: Observable<Image[]> = of([]);

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageList$ = this.imageService.getImageList();
  }

  getThumbnail(url: string, width: number = 64, height: number = 64): string {
    const fileName = url.split('/').slice(-1);
    return `https://res.cloudinary.com/evalquote/image/upload/w_${width},h_${height},c_fill/${fileName}`;
  }
}
