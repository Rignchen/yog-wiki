import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Roles } from '#services/roles';
import { Role as RoleType } from '#types/role';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-role-details',
	imports: [RouterModule],
	templateUrl: './role-details.html',
	styleUrl: './role-details.css',
})
export class RoleDetails {
	public role: RoleType | undefined;
	roleService = inject(Roles);
	protected descriptions: { type: string; text: string }[] = [];

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			const name = params['name'];
			this.role = this.roleService.list.find(
				(role) => role.name.toLowerCase() === name,
			);
			if (!this.role) return;
			this.descriptions = [
				...this.role.caracteristiques.map((carac) => ({ type: 'Caractéristique', text: carac })),
				...this.role.pouvoirs.jour.map((pouvoir) => ({ type: 'Pouvoir de jour', text: pouvoir })),
				...this.role.pouvoirs.nuit.map((pouvoir) => ({ type: 'Pouvoir de nuit', text: pouvoir })),
			];
		});
	}
}
