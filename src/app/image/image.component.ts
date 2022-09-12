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
}
