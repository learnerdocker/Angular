import { UpperCasePipe } from "@angular/common";
import { Directive, ElementRef, Renderer2, Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: 'setChecked'
})
export class SetChecked implements PipeTransform {

    // private _domSanitizer : DomSanitizer;
    // constructor( domSanitizer: DomSanitizer){
    //     this._domSanitizer = domSanitizer
    // }

    constructor(private _domSanitizer : DomSanitizer) {}

    transform(value: any, args?: any) : any {
        return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value));
    }

    private stylize(text: boolean): string {
        //let stylizedText: string = '';
        // if (text && text.length > 0) {
        //   for (let t of text.split(" ")) {
        //     if (t.startsWith("@") && t.length>1)
        //       stylizedText += `<a href="#${t.substring(1)}">${t}</a> `;
        //     else
        //       stylizedText += t + " ";
        //   }
        //   return stylizedText;
        // }
        // else return text;
        if(text == false)
            return 'Falsy'
        else 
            return 'Truthy'
    
      }
}