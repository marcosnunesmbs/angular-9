import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input('myForEm') numbers: number[]

  constructor(
    private ViewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.ViewContainerRef.createEmbeddedView(this.template, { $implicit: number })
    }
  }

}
