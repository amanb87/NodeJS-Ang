import { EventEmitter, OnChanges } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child01',
  templateUrl: './child01.component.html',
  styleUrls: ['./child01.component.css']
})
export class Child01Component implements OnInit, OnChanges{

  @Input() name: string;
  @Input() color = "grey";

  text = "Using";

  @Output()  touch = new EventEmitter<string>();

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, "color", this.color);
  }

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, "color", this.color);
  }

  emit() { this.touch.emit("touched"); }

}
