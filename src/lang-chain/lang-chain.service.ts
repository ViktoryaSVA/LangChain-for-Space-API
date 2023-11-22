import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { DocumentService } from "./services/document.service";

@Injectable()
export class LangChainService {
    constructor(@Inject(DocumentService) private readonly documentService: DocumentService) {}

    private processedDocuments: Set<number> = new Set();

    processText(text: string): string {
        const lowerCaseText: string = text.toLowerCase();
        const words = lowerCaseText.match(/\b\w+\b/g) || [];

        let processedText: string = '';

        try {
            processedText = words
                .map(word => {
                    const document = this.documentService.getDocumentByQuestion(word);
                    if (document) {
                        if (!this.processedDocuments.has(document.id)) {
                            this.processedDocuments.add(document.id);
                            return document.answer;
                        }
                    }
                    return word;
                })
                .join(' ');
        } catch (error) {
            throw new HttpException(`Error processing text: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            this.processedDocuments.clear();
        }

        return processedText.trim();
    }
}