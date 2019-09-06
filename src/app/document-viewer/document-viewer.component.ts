import { Component, OnInit } from '@angular/core';

import { DocumentService } from '../services/document.service';
import { DocumentBatch } from '../models/document-batch';

@Component({
    selector: 'app-document-viewer',
    templateUrl: './document-viewer.component.html',
    styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
    public paragraphs: string[] = ['test'];

    private paragraphsFetched: number;
    private remainingParagraphs: number;

    constructor(private documentService: DocumentService) { }

    ngOnInit() {
        this.documentService.getDocumentBatch(0).subscribe(documentBatch => {
            this.paragraphs = documentBatch.paragraphs;
            this.paragraphsFetched = documentBatch.paragraphs.length;
            this.remainingParagraphs = documentBatch.remainingParagraphs;
        });
    }

    handler(event: any) {
        console.log(event);
    }

}
