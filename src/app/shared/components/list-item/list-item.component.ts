import { Component, Input } from '@angular/core';
import { Invoice } from '../../../features/components/invoice/models/invoice.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent  {


  @Input()
  item!: Invoice;

}
