import { Routes } from '@angular/router';
import { StandaloneTestComponent } from './standalone-test/standalone-test.component';
import { IfElseTestComponent } from './if-else-test/if-else-test.component';
import { ForTestComponent } from './for-test/for-test.component';
import { DeferTestComponent } from './defer-test/defer-test.component';
import { InjectableServiceTestComponent } from './injectable-service-test/injectable-service-test.component';
import { DefaultPipeExamplesComponent } from './default-pipe-examples/default-pipe-examples.component';
import { HtmlTemplateExamplesComponent } from './html-template-examples/html-template-examples.component';
import { NgSwitchTestComponent } from './ng-switch-test-component/ng-switch-test-component.component';
import { StateManagementComponent } from './state/state-management/state-management.component';
import { ParentComponent as InputOutputParent } from './state/inputOutput/parent/parent.component';
import { ParentComponent as InputSignalOutputParent } from './state/signalOutput/parent/parent.component';
import { ParentComponent as ModelParent } from './state/model/parent/parent.component';
import { ParentComponent as ServiceStateManagement } from './state/serviceSideState/parent/parent.component';
import { MainComponent } from './rxjs/main/main.component';
import { PrimerComponent } from './rxjs/primer/primer.component';
import { OperatorsComponent } from './rxjs/operators/operators.component';
import { CombinationComponent } from './rxjs/combination/combination.component';
import { FilteringComponent } from './rxjs/filtering/filtering.component';
import { TransformationComponent } from './rxjs/tranformation/tranformation.component';


export const routes: Routes = [
    { path: '', title: 'landing', component: HtmlTemplateExamplesComponent },
    { path: 'standaloneComponent', title: 'standAloneComponentTest', component: StandaloneTestComponent },
    {
        path: 'htmlTemplate', title: 'htmlTemplate', component: HtmlTemplateExamplesComponent, children: [{ path: 'ifElse', title: 'ifElseComponentTest', component: IfElseTestComponent },
        { path: 'forLoop', title: 'forLoopComponentTest', component: ForTestComponent },
        { path: 'ngSwitch', title: 'ngSwitchTest', component: NgSwitchTestComponent },
        { path: 'defer', title: "deferComponentTest", component: DeferTestComponent },
        { path: 'defaultPipes', title: 'defaultPipes', component: DefaultPipeExamplesComponent }
        ]
    },

    { path: 'injectableService', title: "injectableServiceTest", component: InjectableServiceTestComponent },
    {
        path: 'stateManagement', title: 'stateManagement', component: StateManagementComponent, children: [
            { path: 'inputOutput', title: 'inputOutput', component: InputOutputParent },
            { path: 'inputSignalOutput', title: 'inputSignalOutput', component: InputSignalOutputParent },
            { path: 'model', title: 'model', component: ModelParent },
            { path: 'serviceStateManagement', title: 'serviceStateManagement', component: ServiceStateManagement }
        ]
    },
    {
        path: 'rxjs', title: 'rxjs', component: MainComponent, children: [
            { path: 'primer', title: 'primer', component: PrimerComponent },
            {
                path: 'operators', title: 'operators', component: OperatorsComponent, children: [
                    { path: 'combination', title: 'combination', component: CombinationComponent },
                    { path: 'filtering', title: 'filtering', component: FilteringComponent },
                    { path: 'transformation', title: 'transformation', component: TransformationComponent },
                ]
            },
        ]
    },
    { path: '**', redirectTo: '' }

];
