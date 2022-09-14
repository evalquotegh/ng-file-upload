import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Output() fileUploadEmitter = new EventEmitter<FileList>();

  constructor() {}

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    if (files) this.fileUploadEmitter.emit(files);
  }
}
