import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';


import { ProvaDetalheComponent } from '../../partials/prova-detalhe/prova-detalhe.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],

})
export class TestComponent implements OnInit {

  title:string = "provas"
  
  items = [
    {name: 'chute em distância', id: "distancia", description:"Este é o chute em distância"},
    {name: 'chute em altura', id: "altura", description:"Este é o chute em altura"}
  ];


  constructor() {}

  ngOnInit() {
  }

}
