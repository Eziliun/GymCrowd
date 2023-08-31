import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('nav') nav!: ElementRef;

  constructor(
    private router: Router
  ) {}

  navigateToLogin() {
    this.router.navigate(['/auth']);
  }

  ngOnInit(): void {
    const nav = document.querySelector("nav") as HTMLElement;
    const sidebarOpen = document.querySelector(".sidebarOpen") as HTMLElement;

    sidebarOpen.addEventListener("click", () => {
      nav.classList.add("active");
    });

    nav.addEventListener("click", (e) => {
      let clickedElm = e.target as HTMLElement;
      if (
        !clickedElm.classList.contains("sidebarOpen")
      ) {
        nav.classList.remove("active");
      }
    });
  }
}



