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
    var navBar = document.querySelector('.nav')

    window.onscroll = function changeClass(){
      var scrollPosY = window.pageYOffset | document.body.scrollTop;
      var _nav = navBar as HTMLElement;
      if(scrollPosY > 300){
        _nav.setAttribute("style" ,"background: rgba(0,0,0,.5);");
      }if(scrollPosY < 300){
        _nav.setAttribute("style", "background:transparent");
      }

    }

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
