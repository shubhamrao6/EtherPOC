import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomeComponent } from './components/home/home.component';
import { QwickCloudComponent } from './components/qwick-cloud/qwick-cloud.component';
import { CloudTrekComponent } from './components/cloud-trek/cloud-trek.component';
import { ApiFiComponent } from './components/api-fi/api-fi.component';
import { CashApiComponent } from './components/cash-api/cash-api.component';
import { CsvTableComponent } from './components/cloud-trek/csv-table/csv-table.component';
import { SwaggerPopupComponent } from './components/api-fi/swagger-popup/swagger-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent,
    HomeComponent,
    QwickCloudComponent,
    CloudTrekComponent,
    ApiFiComponent,
    CashApiComponent,
    CsvTableComponent,
    SwaggerPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
