import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from "@angular/common/http";
export class Cities {
    name: string;
    id: number;
  }
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html'
})

export class ComponentsComponent implements OnInit {
    products: any = [];
    constructor( 
        private renderer : Renderer2,
        private httpClient: HttpClient
        ) {}


    ngOnInit() {
        this.httpClient.get("assets/data.json").subscribe(data =>{
            console.log(data);
            this.products = data;
          })
    }

}
