import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colors',
  imports: [],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})

export class ColorsComponent {
  @Input() color!: {hex: string, name: string, luminance: number};
  @Output() colorClicked = new EventEmitter<string>()

  onColorClicked() {
    this.colorClicked.emit(this.color.name)
  }

}
