import { Component, OnInit, QueryList, ViewChildren, AfterViewInit, ElementRef } from '@angular/core';

import { DocumentService } from '../services/document.service';
import { DocumentBatch } from '../models/document-batch';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-document-viewer',
    templateUrl: './document-viewer.component.html',
    styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit, AfterViewInit {
    public paragraphs: string[];
    public renderedParagraphCount: number;

    private paragraphsFetched: number;
    private remainingParagraphs: number;
    private isFetchingData: boolean;
    @ViewChildren('docParagraph') private renderedParagraphs: QueryList<ElementRef>;

    constructor(private documentService: DocumentService) {
        this.isFetchingData = false;
        this.paragraphsFetched = 0;
        this.paragraphs = [];
    }

    public ngOnInit(): void {
        this.fetchNextBatch();
    }

    public ngAfterViewInit(): void {
        this.setRenderedParagraphCount();

        this.renderedParagraphs.changes.subscribe(_ => {
            this.setRenderedParagraphCount();
        });
    }

    public onScroll(scrollIndex: number): void {
        const hasScrolledDownEnough = scrollIndex > (this.paragraphsFetched - environment.scrollingThrottle);

        if (hasScrolledDownEnough && !this.isFetchingData && this.remainingParagraphs !== 0) {
            this.fetchNextBatch();
        }
    }

    private fetchNextBatch(): void {
        this.isFetchingData = true;
        this.documentService.getDocumentBatch(this.paragraphsFetched).subscribe(
            (documentBatch: DocumentBatch) => {
                this.paragraphs = this.paragraphs.concat(documentBatch.paragraphs);
                this.paragraphsFetched += documentBatch.paragraphs.length;
                this.remainingParagraphs = documentBatch.remainingParagraphs;
            },
            (err) => {
                // TODO: log to some remote stash, create metrics etc
                console.error(err);
            },
            () => {
                this.isFetchingData = false;
            }
        );
    }

    private setRenderedParagraphCount(): void {
        // The AfterViewInit lifecycle hook requires the setTimeout trick to avoid change detection problems
        setTimeout(() => {
            this.renderedParagraphCount = this.renderedParagraphs.length;
        });
    }
}
