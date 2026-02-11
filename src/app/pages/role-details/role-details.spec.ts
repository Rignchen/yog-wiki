import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';

import { provideRouter } from '@angular/router';
import { RoleDetails } from './role-details';

describe('RoleDetails', () => {
	let component: RoleDetails;
	let fixture: ComponentFixture<RoleDetails>;
	let harness: RouterTestingHarness;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RoleDetails],
			providers: [
				provideRouter([{ path: 'roles/:name', component: RoleDetails }]),
			]
		}).compileComponents();
		harness = await RouterTestingHarness.create();

		fixture = TestBed.createComponent(RoleDetails);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show "Role not found" if role does not exist', () => {
		harness.navigateByUrl('/roles/nonexistent');
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.textContent).toContain('Rôle non trouvé.');
	});
});
