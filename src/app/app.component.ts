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
  public fileName: string = '';

  constructor(
    private fileUploadService: FileUploadService,
    private imageService: ImageService,
    public dialog: MatDialog
  ) {}

  uploadFile(files: FileList): void {
    const data = { data: { fileName: files[0].name } };
    const dialogRef = this.dialog.open(DialogComponent, data);

    dialogRef.afterClosed().subscribe((result) => {
      this.fileName = result.fileName;

      this.fileUploadService
        .uploadFile(files[0], this.fileName)
        .subscribe((cloudinaryResponse) => {
          console.log('cloudinaryResponse', cloudinaryResponse);
          this.imageService
            .addImage(cloudinaryResponse)
            .subscribe((jsonServerResponse) =>
              console.log('jsonServerResponse', jsonServerResponse)
            );
        });
    });
  }
}
