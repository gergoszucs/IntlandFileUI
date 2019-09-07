import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

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
});
