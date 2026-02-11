import { Role } from './role';

import type jsonRole from '#types/jsonRole';
import Aura from '#types/aura';
import Camp from '#types/camp';

import exempleJsonRole from '#public/roles.json';

describe('Role', () => {
	describe('normalizeName', () => {
		test.each([
			['éèêë', 'eeee'],
			['àâä', 'aaa'],
			['îï', 'ii'],
			['ôö', 'oo'],
			['ùûü', 'uuu'],
			['ç', 'c'],
		])('should normalize "%s" to "%s"', (input, expected) => {
			expect(Role.normalizeName(input)).toBe(expected);
		});

		test.each([
			['role name', 'role_name'],
			['role-name', 'role_name'],
			['role.name', 'role_name'],
			['role@name', 'rolename'],
			['role#name', 'rolename'],
		])('should normalize "%s" to "%s"', (input, expected) => {
			expect(Role.normalizeName(input)).toBe(expected);
		});

		it('should cast to lowercase', () => {
			expect(Role.normalizeName('RoLeNaMe')).toBe('rolename');
		});
	});

	describe('constructor', () => {
		test.each([
			["Radieuse", Aura.Radieuse],
			["Neutre", Aura.Neutre],
			["Obscure", Aura.Obscure],
		])('should cast aura "%s" to "%s"', (aura, expected) => {
			const roleData = {
				...exempleJsonRole[0],
				aura,
			};
			const role = new Role(roleData as jsonRole);
			expect(role.aura).toBe(expected);
		});

		test.each([
			["Yo-Kai", Camp.Yokai],
			["Oni", Camp.Oni],
			["Perfid", Camp.Perfid],
			["Solitaire", Camp.Solitaire],
			["Special", Camp.Special],
		])('should cast camp "%s" to "%s"', (camp, expected) => {
			const roleData = {
				...exempleJsonRole[0],
				camp,
			};
			const role = new Role(roleData as jsonRole);
			expect(role.camp).toBe(expected);
		});

		test.each([
			[undefined,          'roles/role_name.png', 'Role Name'],
			['custom_image.png', 'custom_image.png',    'Role Name'],
		])('should infer image "%s" to "%s"', (image, expected, name) => {
			const roleData = {
				...exempleJsonRole[0],
				name,
				image,
			};
			const role = new Role(roleData as jsonRole);
			expect(role.image).toBe(expected);
		});

		test.each([
			[undefined, {jour: [], nuit: []}],
			[{jour: ['Power 1']}, {jour: ['Power 1'], nuit: []}],
			[{nuit: ['Power 2']}, {jour: [], nuit: ['Power 2']}],
			[{jour: ['Power 1'], nuit: ['Power 2']}, {jour: ['Power 1'], nuit: ['Power 2']}],
		])('should turn pouvoir "%o" into "%o"', (pouvoirs, expected) => {
			const roleData = {
				...exempleJsonRole[0],
				pouvoirs,
			};
			const role = new Role(roleData as jsonRole);
			expect(role.pouvoirs).toEqual(expected);
		});

		test.each([
			[undefined, []],
			[['Caracteristique 1', 'Caracteristique 2'], ['Caracteristique 1', 'Caracteristique 2']],
		])('should default caracteristiques to "%o"', (caracteristiques, expected) => {
			const roleData = {
				...exempleJsonRole[0],
				caracteristiques,
			};
			const role = new Role(roleData as jsonRole);
			expect(role.caracteristiques).toEqual(expected);
		});

		test.each([
			[undefined, []],
			[['Example 1', 'Example 2'], ['Example 1', 'Example 2']],
		])('should default exemples to "%o"', (exemples, expected) => {
			const roleData = {
				...exempleJsonRole[0],
				exemples,
			};
			const role = new Role(roleData as jsonRole);
			expect(role.exemples).toEqual(expected);
		});
	});
});
