import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';

import { ProvaDetalheComponent } from '../../partials/prova-detalhe/prova-detalhe.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],

})
export class TestComponent implements OnInit {

  title:string = "provas"
  
  constructor() {}

  ngOnInit() {
  }

}
