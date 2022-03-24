import { Routes,RouterModule } from "@angular/router";
import { AboutHtcComponent } from "./about-htc/about-htc.component";
import { AgileComponent } from "./agile/agile.component";
import { CloudComponent } from "./cloud/cloud.component";
import { DigitalExperienceComponent } from "./digital-experience/digital-experience.component";
import { HtcHomeComponent } from "./htc-home/htc-home.component";
import { QualityComponent } from "./quality/quality.component";




const arr : Routes = [
{path:"",component:HtcHomeComponent},
{path:'aboutHtc',component:AboutHtcComponent},
{path:'digitalExperience',component:DigitalExperienceComponent},
{path:'cloud',component:CloudComponent},
{path:'agile',component:AgileComponent},
{path:'quality',component:QualityComponent},

];

export const routing =  RouterModule.forRoot(arr);
