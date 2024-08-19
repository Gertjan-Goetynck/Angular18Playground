import { Routes } from '@angular/router';
import { StandaloneTestComponent } from './standalone-test/standalone-test.component';
import { IfElseTestComponent } from './if-else-test/if-else-test.component';
import { ForTestComponent } from './for-test/for-test.component';
import { DeferTestComponent } from './defer-test/defer-test.component';
import { InjectableServiceTestComponent } from './injectable-service-test/injectable-service-test.component';
import { DefaultPipeExamplesComponent } from './default-pipe-examples/default-pipe-examples.component';

export const routes: Routes = [
    { path: '', title: 'landing', component: StandaloneTestComponent },
    { path: 'standaloneComponent', title: 'standAloneComponentTest', component: StandaloneTestComponent },
    { path: 'ifElse', title: 'ifElseComponentTest', component: IfElseTestComponent },
    { path: 'forLoop', title: 'forLoopComponentTest', component: ForTestComponent },
    { path: 'defer', title: "deferComponentTest", component: DeferTestComponent },
    { path: 'injectableService', title: "injectableServiceTest", component: InjectableServiceTestComponent },
    { path: 'defaultPipes', title: 'defaultPipes', component: DefaultPipeExamplesComponent },
    { path: '**', redirectTo: '' }

];
