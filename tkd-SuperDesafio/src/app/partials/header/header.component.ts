import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var menuBtn = document.querySelector('.menu-icon');
    var menuToggle = document.querySelector('.menu');
    var menuLink = document.querySelectorAll('.menu-link');

    function abrirMenu() {
      menuBtn.addEventListener('click', function(){
        this.classList.toggle('active');
        menuToggle.classList.toggle('is-open');
      });
    }


    function fecharMenu() {
      for(var i = 0; i < menuLink.length; i++){
        menuLink[i].addEventListener('click',function(){
          menuToggle.classList.remove('is-open');
          menuBtn.classList.remove('active');
        });
      }
    }

    abrirMenu();
    fecharMenu();
  }

}
