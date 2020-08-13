import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { PagesMenu } from 'src/app/models/interfaces/PagesMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  pagesMenu: Observable<PagesMenu[]>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.pagesMenu = this.dataService.getMenuOpts();
  }

}
