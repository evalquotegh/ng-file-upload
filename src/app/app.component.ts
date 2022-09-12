import { Component } from '@angular/core';
import { FileUploadService } from './file-upload/file-upload.service';
import { ImageService } from './image/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-file-upload';

  constructor(
    private fileUploadService: FileUploadService,
    private imageService: ImageService
  ) {}

  uploadFile(files: FileList): void {
    this.fileUploadService
      .uploadFile(files[0])
      .subscribe((cloudinaryResponse) =>
        this.imageService
          .addImage(cloudinaryResponse)
          .subscribe((jsonServerResponse) => console.log(jsonServerResponse))
      );
  }
}
