import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();
}
