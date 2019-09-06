import { Component, OnInit } from '@angular/core';

import { DocumentService } from '../services/document.service';
import { DocumentBatch } from '../models/document-batch';

@Component({
    selector: 'app-document-viewer',
    templateUrl: './document-viewer.component.html',
    styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
    private paragraphsFetched = 0;

    constructor(private documentService: DocumentService) { }

    ngOnInit() {
        this.documentService.getDocumentBatch(this.paragraphsFetched).subscribe({
            next(documentBatch: DocumentBatch) { console.log('got value ' + documentBatch); },
            error(err) { console.error('something wrong occurred: ' + err); }
        });
    }

}
