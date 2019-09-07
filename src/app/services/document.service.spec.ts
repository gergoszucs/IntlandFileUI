import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DocumentService } from './document.service';

describe('DocumentService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    }));

    it('should be created', () => {
        const service: DocumentService = TestBed.get(DocumentService);
        expect(service).toBeTruthy();
    });
});
