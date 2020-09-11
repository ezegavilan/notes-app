import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.scss']
})
export class CardNotaComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() body: string;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;
  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    console.log(this.bodyText);
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      // Si no hay texto en exceso --> mostrar el truncador
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  ngOnInit(): void {
   
  }

}
