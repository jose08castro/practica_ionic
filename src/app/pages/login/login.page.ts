import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PagesMenu } from '../../models/interfaces/PagesMenu'
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  componentes: Observable<PagesMenu[]>;
  
  constructor(private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  toggleMenu(){
    this.menuController.toggle();
  }
}

