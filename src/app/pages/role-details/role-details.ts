import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Roles } from '#services/roles';
import { Role as RoleType } from '#types/role';

@Component({
	selector: 'app-role-details',
	imports: [],
	templateUrl: './role-details.html',
	styleUrl: './role-details.css',
})
export class RoleDetails {
	public role: RoleType | undefined;
	roleService = inject(Roles);

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			const name = params['name'];
			this.role = this.roleService.list.find(
				(role) => role.name.toLowerCase() === name,
			);
		});
	}
}
