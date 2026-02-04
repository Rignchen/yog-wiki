import Camp from '#types/camp';
import Aura from '#types/aura';

interface Role {
	name: string;
	camp: Camp;
	aura: Aura;
	caracteristiques?: string[];
	pouvoirs?: {
		jour?: string[];
		nuit?: string[];
	};
	details: string;
	exemple: string;
	image?: string;
}
export default Role;
