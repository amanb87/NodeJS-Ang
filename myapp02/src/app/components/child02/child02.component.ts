import { Renderer2 } from '@angular/core';
import { Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child02',
  templateUrl: './child02.component.html',
  styleUrls: ['./child02.component.css']
})
export class Child02Component {

  body = this.el.nativeElement.ownerDocument.body;
  activateColor = "white";

  @Output() colorChange = new EventEmitter<string>();
  btnText = "Toggle BkGnd Color";

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  changeBg() {
    this.colorChange.emit(this.activateColor);

    this.activateColor === "white"
      ? (this.activateColor = "magenta")
      : (this.activateColor = "white");

    this.renderer.setStyle(this.body, "background", this.activateColor);
  }

}
