import { Component, OnInit } from '@angular/core';
import { SelectBrand, SelectColor, SelectMaterial, SelectFeature, SelectPrice, SelectGender, TableRow } from './table';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  filters: string[] = [];

  brands: SelectBrand[] = [
    { value: 1, option: 'Garmin' },
    { value: 2, option: 'Alfred Sung' },
    { value: 3, option: 'Wrangler' },
    { value: 4, option: 'G-Shock' },
    { value: 5, option: 'Schaffhausen' }
  ];
  colors: SelectColor[] = [
    { value: 1, option: 'Black' },
    { value: 2, option: 'Gray' },
    { value: 3, option: 'White' },
    { value: 4, option: 'Brown' },
    { value: 5, option: 'Blue' }
  ];
  materials: SelectMaterial[] = [
    { value: 1, option: 'Plastic' },
    { value: 2, option: 'Metal' },
    { value: 3, option: 'Gum' },
    { value: 4, option: 'Gilt' }
  ];
  features: SelectFeature[] = [
    { value: 1, option: 'Waterproof' },
    { value: 2, option: 'Stopwatch' },
    { value: 3, option: 'Automatic' },
    { value: 4, option: 'Manual' }
  ];
  prices: SelectPrice[] = [
    { value: 1, option: '$100.00 - $1,000.00' },
    { value: 2, option: '$1,000.00 - $2,000.00' },
    { value: 3, option: '$2,000.00 - $4,000.00' },
    { value: 4, option: '$4,000.00 - $6,000.00' },
    { value: 5, option: '$6,000.00 - $8,000.00' },
    { value: 6, option: '$8,000.00 - $10,000.00' },
    { value: 7, option: '> $10,000.00' }
  ];
  genders: SelectGender[] = [
    { value: 1, option: 'Male' },
    { value: 2, option: 'Female' },
    { value: 3, option: 'Other' }
  ];
  tableRows: TableRow[] = [
    {
      id: 1,
      img_table_watch: 'assets/images/table-watch1.png',
      brand_name: 'ALFRED SUNG',
      brand_collection: 'Slim Collection Series 5',
      item_no: 'AS7104SL-1A',
      listing_price: 3700,
      wholesale_price: 3700,
      quantity: 0,
      low_on_stock: true,
      out_of_stock: false,
      isBrown: false,
      showMore: false,
      added: false,
      isDecreaseQuantityDisabled: true,
      isAddButtonDisabled: false,
    },
    {
      id: 2,
      img_table_watch: 'assets/images/table-watch2.png',
      brand_name: 'GARMIN',
      brand_collection: 'Classic Collection',
      item_no: 'AW2304WE-9Q',
      listing_price: 4200,
      wholesale_price: 4000,
      quantity: 0,
      low_on_stock: false,
      out_of_stock: false,
      isBrown: false,
      showMore: false,
      added: false,
      isDecreaseQuantityDisabled: true,
      isAddButtonDisabled: false
    },
    {
      id: 3,
      img_table_watch: 'assets/images/table-watch1.png',
      brand_name: 'ALFRED SUNG',
      brand_collection: 'Slim Collection Series 5',
      item_no: 'AS7104SL-1A',
      listing_price: 3700,
      wholesale_price: 3700,
      quantity: 0,
      low_on_stock: false,
      out_of_stock: false,
      isBrown: false,
      showMore: false,
      added: false,
      isDecreaseQuantityDisabled: true,
      isAddButtonDisabled: false
    },
    {
      id: 4,
      img_table_watch: 'assets/images/table-watch3.png',
      brand_name: 'WRANGLER',
      brand_collection: 'Western Collection',
      item_no: 'AS7494SL-8R',
      listing_price: 5600,
      wholesale_price: 5200,
      quantity: 0,
      low_on_stock: false,
      out_of_stock: false,
      isBrown: false,
      showMore: false,
      added: false,
      isDecreaseQuantityDisabled: true,
      isAddButtonDisabled: false
    },
    {
      id: 5,
      img_table_watch: 'assets/images/table-watch1.png',
      brand_name: 'ALFRED SUNG',
      brand_collection: 'Slim Collection Series 5',
      item_no: 'AS7104SL-1A',
      listing_price: 3700,
      wholesale_price: 3700,
      quantity: 0,
      low_on_stock: false,
      out_of_stock: true,
      isBrown: false,
      showMore: false,
      added: false,
      isDecreaseQuantityDisabled: true,
      isAddButtonDisabled: false
    },
    {
      id: 6,
      img_table_watch: 'assets/images/table-watch4.png',
      brand_name: 'GARMIN',
      brand_collection: 'Classic Collection Series 6',
      item_no: 'AS2E0G8E-2U',
      listing_price: 2100,
      wholesale_price: 2000,
      quantity: 0,
      low_on_stock: false,
      out_of_stock: false,
      isBrown: false,
      showMore: false,
      added: false,
      isDecreaseQuantityDisabled: true,
      isAddButtonDisabled: false
    }
  ]

  constructor(public communicationService: CommunicationService) { }

  onChangeBrand(event): void {
    if (event.currentTarget.selectedIndex !== 0) {
      this.filters.push(this.brands[event.currentTarget.selectedIndex - 1].option);
    }
  }

  onChangeColor(event): void {
    if (event.currentTarget.selectedIndex !== 0) {
      this.filters.push(this.colors[event.currentTarget.selectedIndex - 1].option);
    }
  }

  onChangeMaterial(event): void {
    if (event.currentTarget.selectedIndex !== 0) {
      this.filters.push(this.materials[event.currentTarget.selectedIndex - 1].option);
    }
  }

  onChangeFeature(event): void {
    if (event.currentTarget.selectedIndex !== 0) {
      this.filters.push(this.features[event.currentTarget.selectedIndex - 1].option);
    }
  }

  onChangePrice(event): void {
    if (event.currentTarget.selectedIndex !== 0) {
      this.filters.push(this.prices[event.currentTarget.selectedIndex - 1].option);
    }
  }

  onChangeGender(event): void {
    if (event.currentTarget.selectedIndex !== 0) {
      this.filters.push(this.genders[event.currentTarget.selectedIndex - 1].option);
    }
  }

  removeFilterItem(index: number) {
    this.filters.splice(index, 1);
  }

  switchButtonAndAddWatch(tableRow: TableRow): void {
    console.log("tableRow")
    tableRow.added = !tableRow.added;
    tableRow.quantity = 1;
    tableRow.isAddButtonDisabled = true;
    this.communicationService.cartWatches.push(tableRow);
    
    let newCartPrice = (this.communicationService.cartPrice + tableRow.listing_price);
    this.communicationService.cartPrice = newCartPrice;
  }

  ngOnInit(): void {
  }

}
