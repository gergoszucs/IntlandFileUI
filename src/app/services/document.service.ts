import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { DocumentBatch } from '../models/document-batch';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {
    private take: number;

    constructor(private httpClient: HttpClient) {
        this.take = environment.browserParagraphLimit;
    }

    public getDocumentBatch(skip: number): Observable<DocumentBatch> {
        return this.httpClient.get<DocumentBatch>(this.constructDocumentBatchUrl(skip));
    }

    private constructDocumentBatchUrl(skip: number): string {
        return `${environment.apiUrl}/document?skip=${skip}&take=${this.take}`;
    }
}
