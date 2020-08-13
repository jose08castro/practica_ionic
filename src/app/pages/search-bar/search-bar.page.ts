import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe ( albumes => {
      this.albumes = albumes;
    });
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

}
