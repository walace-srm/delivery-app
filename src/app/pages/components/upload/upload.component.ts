import { Component } from '@angular/core';
import { FileUploadService } from '../../services/upload/file-upload.service';
import { FileUpload } from '../../interfaces/upload/file-upload.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.selectedFile = file;
  }

  onSubmit() {
    if (this.selectedFile) {
      const fileUpload = new FileUpload(this.selectedFile);
      this.fileUploadService.pushFileToStorage(fileUpload).subscribe(
        percentage => {
          // This is the percentage of the upload completed
        },
        error => {
          console.error(error);
        }
      );
    }
  }

}
