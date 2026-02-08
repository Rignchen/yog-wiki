import { RenderMode, ServerRoute } from '@angular/ssr';

import { Roles } from '#services/roles';
import { inject } from '@angular/core';

export const serverRoutes: ServerRoute[] = [
	{
		path: 'role/:name',
		renderMode: RenderMode.Prerender,
		getPrerenderParams: async () => {
			const roles = inject(Roles);
			return roles.list.map((role) => ({
				name: role.normalizedName,
			}));
		},
	},
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
];
