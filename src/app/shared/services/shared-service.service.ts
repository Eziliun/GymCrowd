import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  isSideBarVisible: boolean  = false

  toggleSidebar(): void {
    this.isSideBarVisible = !this.isSideBarVisible;
    console.log('ToggleSideBar');
    console.log(this.toggleSidebar);
    console.log(this.isSideBarVisible);
    
  }

  sideBarState(): boolean {
    console.log('sideBarState');
    console.log(this.isSideBarVisible);

    return this.isSideBarVisible
  }
}
