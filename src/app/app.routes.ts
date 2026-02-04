import { Routes } from '@angular/router';
import { Home } from '#pages/home';
import { RoleDetails } from '#pages/role-details';

export const routes: Routes = [
	{path: '', component: Home},
	{path: 'role/:name', component: RoleDetails}
];
