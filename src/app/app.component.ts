import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FileUploadService } from './file-upload/file-upload.service';
import { ImageService } from './image/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'ng-file-upload';

  constructor(
    private fileUploadService: FileUploadService,
    private imageService: ImageService,
    public dialog: MatDialog
  ) {}

  uploadFile(files: FileList): void {
    this.fileUploadService
      .uploadFile(files[0])
      .subscribe((cloudinaryResponse) => {
        this.openDialog(DialogComponent, {
          data: {
            animal: 'panda',
          },
        });
        // this.imageService
        //   .addImage(cloudinaryResponse)
        //   .subscribe((jsonServerResponse) => console.log(jsonServerResponse))
      });
  }

  openDialog(component: any, data: any): void {
    this.dialog.open(component, data);
  }
}
