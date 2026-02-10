import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { RoleDetails } from './role-details';

describe('RoleDetails', () => {
	let component: RoleDetails;
	let fixture: ComponentFixture<RoleDetails>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RoleDetails],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: {
						params: {
							subscribe: (callback: any) => {
								callback({ id: 'test-role-id' });
							},
						},
					},
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(RoleDetails);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
