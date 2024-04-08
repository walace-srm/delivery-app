import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = this.el.nativeElement.querySelector('#myHeader');
    if (window.pageYOffset > 300) {
      this.renderer.setStyle(element, 'font-size', '20px');
    } else {
      this.renderer.setStyle(element, 'font-size', '30px');
    }
  }

}
