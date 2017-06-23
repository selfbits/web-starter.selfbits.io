import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';

const SERVICES = [];

const GUARDS = [];

const PROVIDERS = [];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ClarityModule.forRoot(),
		FormsModule,
		HttpModule,
		BrowserAnimationsModule
	],
	providers: [
		...SERVICES,
		...GUARDS,
		...PROVIDERS
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
