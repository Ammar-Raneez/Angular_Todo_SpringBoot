import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from 'src/app/services/hard-coded-auth/hardcoded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthService : HardcodedAuthService) { }

  ngOnInit(): void {
    this.hardcodedAuthService.logout();
  }
}
