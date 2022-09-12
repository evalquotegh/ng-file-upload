import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    if (files) this.fileUploadService.uploadFile(files[0]).subscribe();
  }
}
