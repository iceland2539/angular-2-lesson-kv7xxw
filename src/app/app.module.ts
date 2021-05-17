import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VariableComponent } from '../l01variable/variable.component';
import { ClickComponent } from '../l02click/click.component';
import { ChangeComponent } from '../l03change/change.component';
import { IfCauseComponent } from '../l04if-cause/if-cause.component';
import { ForLoopComponent } from '../l05for-loop/for-loop.component';
import { ServiceComponent } from '../l07service/service.component';
import { ComponentIntroComponent } from '../l08component-intro/component-intro.component';
import { CompIntroComponent } from '../l08component-intro/comp-intro/comp-intro.component';
import { ComponentInputComponent } from '../l09component-input/component-input.component';
import { CompInputComponent } from '../l09component-input/comp-input/comp-input.component';
import { ComponentOutputComponent } from '../l10component-output/component-output.component';
import { CompOutputComponent } from '../l10component-output/comp-output/comp-output.component';
import { ComponentIoComponent } from '../l11component-io/component-io.component';
import { CompIoComponent } from '../l11component-io/comp-io/comp-io.component';
import { ComponentComponent } from '../l12component-example/component.component';
import { HelloComponent } from '../l12component-example/hello/hello.component';
import { FormComponent } from '../l13form/form.component';

import { MySpaceComponent } from '../my-space/my-space.component';
import { MySpace2Component } from '../my-space2/my-space2.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: VariableComponent },
        { path: 'variable', component: VariableComponent },
        { path: 'click', component: ClickComponent },
        { path: 'change', component: ChangeComponent },
        { path: 'if-cause', component: IfCauseComponent },
        { path: 'for-loop', component: ForLoopComponent },
        { path: 'service', component: ServiceComponent },
        { path: 'component-intro', component: ComponentIntroComponent },
        { path: 'component-input', component: ComponentInputComponent },
        { path: 'component-output', component: ComponentOutputComponent },
        { path: 'component-io', component: ComponentIoComponent },
        { path: 'component-example', component: ComponentComponent },
        { path: 'form', component: FormComponent },
        { path: 'my-space', component: MySpaceComponent },
        { path: 'my-space2', component: MySpace2Component }
      ],
      { useHash: true }
    )
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    VariableComponent,
    ClickComponent,
    ChangeComponent,
    IfCauseComponent,
    ForLoopComponent,
    ServiceComponent,
    ComponentIntroComponent,
    CompIntroComponent,
    ComponentInputComponent,
    CompInputComponent,
    ComponentComponent,
    ComponentOutputComponent,
    CompOutputComponent,
    ComponentIoComponent,
    CompIoComponent,
    FormComponent,
    MySpaceComponent,
    MySpace2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
