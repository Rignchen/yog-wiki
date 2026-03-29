import { Injectable } from '@angular/core';
import { Role } from '#types/role';
import RoleList from '#data';

@Injectable({
	providedIn: 'root',
})
export class Roles {
	public list: Role[] = RoleList.map(
		(roleData) => new Role(roleData),
	);
}
