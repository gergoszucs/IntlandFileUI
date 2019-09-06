import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

import { DocumentService } from '../services/document.service';
import { DocumentBatch } from '../models/document-batch';
import { environment } from 'src/environments/environment';

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
    private isFetchingData = false;
    @ViewChildren('docParagraph') private renderedParagraphs: QueryList<any>;

    constructor(private documentService: DocumentService) { }

    public ngOnInit(): void {
        this.documentService.getDocumentBatch(0).subscribe(
            (documentBatch: DocumentBatch) => {
                this.paragraphs = documentBatch.paragraphs;
                this.paragraphsFetched = documentBatch.paragraphs.length;
                this.remainingParagraphs = documentBatch.remainingParagraphs;
            },
            (err) => {
                console.error(err);
            });
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
            console.log('fetching data at: ', scrollIndex);
            this.isFetchingData = true;
            this.documentService.getDocumentBatch(this.paragraphsFetched).subscribe(
                (documentBatch: DocumentBatch) => {
                    this.paragraphs = this.paragraphs.concat(documentBatch.paragraphs);
                    this.paragraphsFetched += documentBatch.paragraphs.length;
                    this.remainingParagraphs = documentBatch.remainingParagraphs;
                },
                (err) => {
                    console.error(err);
                },
                () => {
                    this.isFetchingData = false;
                }
            );
        }
    }

    private setRenderedParagraphCount(): void {
        setTimeout(() => {
            this.renderedParagraphCount = this.renderedParagraphs.length;
        });
    }
}
