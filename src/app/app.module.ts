import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CodeComponent } from './code/code.component';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service'; 
import { BchartService } from './services/bchart.service'; 
import { NewsComponent } from './news/news.component';
import { BarchartComponent } from './barchart/barchart.component';
import 'rxjs/Rx';


//material
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ObservableMedia } from '@angular/flex-layout';

//for primeng
import { ChartModule } from 'primeng/primeng';
@NgModule({
  exports: [
    ChartModule
  
  ],
})
export class PrimeModule { }
//end for primeng

@NgModule({
  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    FlexLayoutModule
    
  ]
})
export class MaterialModule { }
//material done


@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    NewsComponent,
    BarchartComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    PrimeModule,
    FlexLayoutModule

  ],
  providers: [DataService,BchartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
