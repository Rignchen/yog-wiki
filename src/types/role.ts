import Camp from '#types/camp';
import Aura from '#types/aura';
import type jsonRole from '#types/jsonRole';

export class Role {
	constructor(roleData: jsonRole) {
		this.name = roleData.name;
		this.camp = roleData.camp;
		this.aura = roleData.aura;
		this.caracteristiques = roleData.caracteristiques ?? [];
		this.pouvoirs = {
			jour: roleData.pouvoirs?.jour ?? [],
			nuit: roleData.pouvoirs?.nuit ?? [],
		};
		this.details = roleData.details;
		this.exemple = roleData.exemple;
		this.image = roleData.image ?? `roles/${this.name.toLowerCase().replace(/ /g, '_')}.png`;
	}
	name: string;
	camp: Camp;
	aura: Aura;
	caracteristiques: string[];
	pouvoirs: {
		jour: string[];
		nuit: string[];
	};
	details: string;
	exemple: string;
	image: string;
}
