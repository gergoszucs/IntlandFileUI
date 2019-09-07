import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

import { DocumentViewerComponent } from './document-viewer.component';

describe('DocumentViewerComponent', () => {
    let component: DocumentViewerComponent;
    let fixture: ComponentFixture<DocumentViewerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DocumentViewerComponent],
            imports: [ScrollingModule, HttpClientModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DocumentViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain the virtual scroller', () => {
        expect(fixture.debugElement.query(By.css('cdk-virtual-scroll-viewport'))).not.toBeNull();
    });

    it('should contain the floating paragraph counter ', () => {
        expect(fixture.debugElement.query(By.css('span.fixed-bottom-right'))).not.toBeNull();
    });
});
