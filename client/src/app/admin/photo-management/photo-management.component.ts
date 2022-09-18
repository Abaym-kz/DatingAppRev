import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photos: Photo[];

  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {this.getPhotosForApproval();
  }

  getPhotosForApproval() {
    this.adminservice.getPhotosForApproval().subscribe(photos => {
      this.photos = photos;
    })
  }

  approvePhoto(photoId) {
    this.adminservice.approvePhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
    })
  }

  rejectPhoto(photoId) {
    this.adminservice.rejectPhoto(photoId).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === photoId), 1);
    })
  }
}
