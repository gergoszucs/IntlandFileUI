import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                BrowserModule,
                NoopAnimationsModule,
                MatSidenavModule,
                MatIconModule,
                MatListModule,
                MatToolbarModule
            ],
            declarations: [
                AppComponent,
                NavigationComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
    });

    it('should create the app', () => {
        expect(fixture.debugElement.componentInstance).toBeTruthy();
    });

    it('should contain the navigation schematics', () => {
        expect(fixture.debugElement.query(By.css('app-navigation'))).not.toBeNull();
    });

    it('should contain the router outlet', () => {
        expect(fixture.debugElement.query(By.css('router-outlet'))).not.toBeNull();
    });
});
