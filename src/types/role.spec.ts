import { Role } from './role';

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
});
