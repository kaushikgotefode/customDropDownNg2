import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomDropDownComponent } from './custom-drop-down/custom-drop-down.component';
// import { SearchBoxComponent } from './search-box/search-box.component';
// import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { SearchPipePipe} from './search-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CustomDropDownComponent,
    // SearchBoxComponent,
    // DropDownListComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
