import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from 'src/app/services/hardcoded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private hardcodedAuthService : HardcodedAuthService) { }

  ngOnInit(): void {
  }

  getHardcodedAuthService() : HardcodedAuthService {
    return this.hardcodedAuthService;
  }
}
