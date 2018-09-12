import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms'; 
import{HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { ClassManagementComponent }  from './class-management.component';
import { ClassManagementService }  from './class-management.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule }        from '@angular/forms';
@NgModule({
  imports: [     
        BrowserModule,
	ReactiveFormsModule,
    HttpClientModule,HttpModule,
    FormsModule

  ],
  declarations: [
        AppComponent,
	ClassManagementComponent
  ],
  providers: [ 
        ClassManagementService
  ],  
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { } 