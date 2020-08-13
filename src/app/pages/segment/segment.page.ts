import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  // valor: string;
  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.valor='todos';
    this.superHeroes = this.dataService.getSuperheroes();
  }

  segmentChanged(event){
    const valorSegmento = event.detail.value
    if(valorSegmento === 'todos'){
      this.publisher = '';
      return;
    }
    this.publisher = valorSegmento;
  }

}
