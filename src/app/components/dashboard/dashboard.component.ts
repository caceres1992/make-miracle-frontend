import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mediaScreen();
  }

  mediaScreen() {
    let oSidebar = document.getElementsByClassName('o-sidebar') as HTMLCollectionOf<HTMLElement>;
    let sidebar = document.getElementById('sidebar');
    let cortina = document.getElementById('cortina');

    function resize() {

      if (document.body.scrollWidth >= 800) {
        normalScreenWidth();
      } else {
        mediaScreenWidth()
      }
    };

    window.onresize = resize;

    function normalScreenWidth() {
      sidebar.style.width = "220px";

      for (let i = 0; i < oSidebar.length; i++) {
        oSidebar[i].style.transform = 'translateX(0px)';
      }

      setTimeout(() => {
        cortina.classList.add('novisible');
      }, 300);
    }

    function mediaScreenWidth() {
      sidebar.style.width = "0px";

      for (let i = 0; i < oSidebar.length; i++) {
        oSidebar[i].style.transform = 'translateX(-220px)';
      }
      cortina.classList.add('novisible');
    }
  }

  toggleSidebar() {
    let oSidebar = document.getElementsByClassName('o-sidebar') as HTMLCollectionOf<HTMLElement>;

    let toggleSidebar = document.getElementById('toggleSidebar');
    let sidebar = document.getElementById('sidebar');
    let cortina = document.getElementById('cortina');

    if (sidebar.clientWidth == 0) {
      sidebar.style.width = "220px";
      toggleSidebar.style.transform = 'rotate(0deg)';
      setTimeout(() => {

        for (let i = 0; i < oSidebar.length; i++) {
          oSidebar[i].style.transform = 'translateX(0px)';
        }

        cortina.classList.remove('novisible');
      }, 350);
    } else {
      sidebar.style.width = "0px";
      toggleSidebar.style.transform = 'rotate(180deg)';

      for (let i = 0; i < oSidebar.length; i++) {
        oSidebar[i].style.transform = 'translateX(-220px)';
      }
      cortina.classList.add('novisible');

    }
  }

  toggleTools() {
    let toolitem = document.getElementById('toolitem');
    toolitem.classList.toggle('novisible');
  }

  showOptionUser() {
    let user = document.getElementById('user');
    let listuser = document.getElementById('listuser');

    listuser.style.transform = 'translateY(0px)';
    user.style.transform = 'translateY(0px)';
  }

  closeOptionUser() {
    let user = document.getElementById('user');
    let listuser = document.getElementById('listuser');

    listuser.style.transform = 'translateY(50px)';
    user.style.transform = 'translateY(50px)';
  }
}
