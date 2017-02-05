import { Component, OnInit, Input } from '@angular/core';
import { SearchPipePipe } from './../search-pipe.pipe';
// import {SearchBoxComponent}from './../search-box/search-box.component';
// import { DropDownListComponent } from './../drop-down-list/drop-down-list.component';


@Component({
    selector: 'app-custom-drop-down',
    templateUrl: './custom-drop-down.component.html',
    styleUrls: ['./custom-drop-down.component.sass'],
    // pipes:[SearchPipePipe]
})
export class CustomDropDownComponent implements OnInit {
    selected: any;
    searchData: string;
    newValue: string;
    toggleDropdown: boolean;
    selectedItems: any = [];
    @Input() listItems: any;
    @Input() addNewItem: boolean;
    @Input() search: boolean;

    constructor() {
        this.selected = "";
        this.newValue = "";
        this.toggleDropdown = false;
    }
    toggleDropdownFunction() {
        this.toggleDropdown = !this.toggleDropdown
    }
    addNewValue() {
       
        if (this.newValue == "") {
            alert("Type somthing...")
        } else {
            this.listItems.push({ "key": this.listItems.length, value: this.newValue, "img": "../assets/images/football.png", "checked": false })
            this.newValue = "";

        }
    }
    selectListItem(e, selectedListItem) {

        if (!selectedListItem.checked) {
            this.selectedItems.push(selectedListItem.value)
        } else {
            this.selectedItems = this.selectedItems.filter(e => e !== selectedListItem.value)
        }
        this.selected = this.selectedItems.join()
    }
    ngOnInit() {
         this.listItems= JSON.parse(JSON.stringify(this.listItems));
    }

}
