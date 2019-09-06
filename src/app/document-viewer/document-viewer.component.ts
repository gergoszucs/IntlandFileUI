import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

import { DocumentService } from '../services/document.service';
import { DocumentBatch } from '../models/document-batch';

@Component({
    selector: 'app-document-viewer',
    templateUrl: './document-viewer.component.html',
    styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit, AfterViewInit {
    public paragraphs: string[] = ['test'];
    public renderedParagraphCount: number;

    private paragraphsFetched: number;
    private remainingParagraphs: number;
    @ViewChildren('docParagraph') private renderedParagraphs: QueryList<any>;

    constructor(private documentService: DocumentService) { }

    public ngOnInit(): void {
        this.documentService.getDocumentBatch(0).subscribe((documentBatch: DocumentBatch) => {
            this.paragraphs = documentBatch.paragraphs;
            this.paragraphsFetched = documentBatch.paragraphs.length;
            this.remainingParagraphs = documentBatch.remainingParagraphs;
        });
    }

    public ngAfterViewInit(): void {
        this.setRenderedParagraphCount();

        this.renderedParagraphs.changes.subscribe(_ => {
            this.setRenderedParagraphCount();
        });
    }

    private setRenderedParagraphCount(): void {
        setTimeout(() => {
            this.renderedParagraphCount = this.renderedParagraphs.length;
        });
    }

    handler(event: any) {
        console.log(event);
    }

}
