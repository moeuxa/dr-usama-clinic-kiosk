import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css']
})
export class KioskComponent implements OnInit {
  public nextPatient: string = '';
  public announcement: string = '';
  public isClinicOpen: boolean = true;
  public clinicHours: string = '9 AM - 5 PM';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    console.log('Initializing KioskComponent...');
    this.firebaseService.getClinicData().subscribe((data: any) => {
      console.log('Received data from Firebase:', data);
      if (data) {
        this.nextPatient = data.nextPatient || '';
        this.announcement = data.announcement || '';
        this.isClinicOpen = data.isClinicOpen !== undefined ? data.isClinicOpen : true;
      }
    });
  }
}
