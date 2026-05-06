import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from './shared/pipes/temperature.pipe';
import { RouterOutlet } from '@angular/router';
import { ColorsComponent } from './colors/colors.component'

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ColorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-photoshare-with-components';

    colors1 = [
         {
            "hex":"#a9b490",
            "name":"Norway",
            "luminance": 119.73308884347718
         },
         {
            "hex":"#bab984",
            "name":"Pine Glade",
            "luminance": 126.89369264467008
         },
         {
            "hex":"#71735c",
            "name":"Finch",
            "luminance": 79.31501427220448
         },
         {
            "hex":"#332625",
            "name":"Wood Bark",
            "luminance": 26.78974027496347
         },
         {
            "hex":"#b99a5d",
            "name":"Barley Corn",
            "luminance": 102.55295407251806
         }
      ]

      colors2 = [
         {
            "hex":"#e8ab9a",
            "name":"Wax Flower",
            "luminance": 128.1748716285684
         },
         {
            "hex":"#137e84",
            "name":"Teal",
            "luminance": 59.31471889000233
         },
         {
            "hex":"#11161d",
            "name":"Black Pearl",
            "luminance": 25.094035247444758
         },
         {
            "hex":"#0c4656",
            "name":"Sherpa Blue",
            "luminance": 43.7638648316165
         },
         {
            "hex":"#91d6d8",
            "name":"Morning Glory",
            "luminance": 133.64699760563272
         }
      ]

      colors3 = [
        {
            "hex": "#9c7b61",
            "name": "Sorrell Brown",
            "luminance": 88.78895209427803
        },
        {
            "hex": "#d1b083",
            "name": "Calico",
            "luminance": 122.80440714404348
        },
                {
            "hex": "#79b0d5",
            "name": "Seagull",
            "luminance": 148.5727584316856
        },
        {
            "hex": "#e2d3b5",
            "name": "Spanish White",
            "luminance": 141.04035031507826
        },
        {
            "hex": "#eca573",
            "name": "Tacao",
            "luminance": 126.60767891403744
        } 
      ]  

  colorClicked: string = "";  



  logClick(color: string){
    this.colorClicked = "The last color clicked was " +  color;
  }
}
