import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from 'src/app/services/basic-auth/basic-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basiAuthService : BasicAuthService) { }

  ngOnInit(): void {
    this.basiAuthService.logout();
  }
}
