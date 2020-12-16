import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from 'src/app/services/basic-auth/basic-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private basicAuthService : BasicAuthService) { }

  ngOnInit(): void {
  }

  getBasicAuthService() {
    return this.basicAuthService;
  }
}
