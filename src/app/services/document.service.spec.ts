import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DocumentService } from './document.service';
import { environment } from 'src/environments/environment';
import { DocumentBatch } from '../models/document-batch';

describe('DocumentService', () => {
    let service: DocumentService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        service = TestBed.get(DocumentService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should costruct the correct URL', () => {
        const skip = 50;
        const url = (service as any).constructDocumentBatchUrl(skip);

        expect(url).toBe(`${environment.apiUrl}/document?skip=${skip}&take=${environment.browserParagraphLimit}`);
    });

    it('should fetch Document Batch via a GET request when getDocumentBatch is called', () => {
        const documentBatch: DocumentBatch = {
            paragraphs: ['abc', 'def'],
            remainingParagraphs: 10
        };

        service.getDocumentBatch(0).subscribe((res) => {
            expect(res).toEqual(documentBatch);
        });

        const req = httpMock.expectOne(`http://localhost:8080/document?skip=0&take=${(service as any).take}`);
        expect(req.request.method).toEqual('GET');
        req.flush(documentBatch);

        httpMock.verify();
    });
});
