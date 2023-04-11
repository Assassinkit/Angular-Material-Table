import { Component } from '@angular/core';

export interface TableElement {
  name: string;
  age: number;
}

const ELEMENT_DATA: TableElement[] = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'age'];
  dataSource = ELEMENT_DATA;

  names = ['All', 'John', 'Jane', 'Bob'];
  selectedName = 'All';

  ages = [null, 20, 25, 30, 35, 40, 45];
  selectedAge = null;


  updateTableData() {
    if(this.selectedName === "All" && this.selectedAge === null) {
      this.dataSource = ELEMENT_DATA;
    }
    else{
      let filteredData = ELEMENT_DATA;
      console.log('Data: ', filteredData);


      // Filter by name
      if (this.selectedName !== '') {
        filteredData = filteredData.filter(data => data.name === this.selectedName);
      }

      // Filter by age
      if (this.selectedAge !== null) {
        filteredData = filteredData.filter(data => data.age === this.selectedAge);
      }

      this.dataSource = filteredData;
    }
    }

}
