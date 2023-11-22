import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DocumentService {
    private documents: DocumentI[] = [
        {"id": 1, "question": "Perform a diagnostic of life support systems.", "answer": "Initiating diagnostic for life support systems. This may take a few minutes. Standby for results."},
        {"id": 2, "question": "What steps are needed to connect new equipment?", "answer": "To connect new equipment, refer to the equipment manual for compatibility. If further assistance is needed, contact technical support for guidance."},
        {"id": 3, "question": "Send data on orbital exit plans for the upcoming week.", "answer": "Orbital exit plans for the upcoming week include scheduled thruster adjustments and trajectory updates. Details have been sent to your workstation."},
        {"id": 4, "question": "Analyze radiation sensor data for the past 24 hours.", "answer": "Analyzing radiation sensor data. Preliminary results indicate normal radiation levels. A detailed report will be available shortly."},
        {"id": 5, "question": "Initiate a scientific experiment to study Earth's surface markings.", "answer": "Initiating scientific experiment. Cameras and sensors are activated. Data collection will commence shortly. Standby for updates."},
        {"id": 6, "question": "Configure cooling systems for optimal performance.", "answer": "Configuring cooling systems for optimal performance. Adjustments will be made to maintain temperature parameters. Monitoring in progress."},
        {"id": 7, "question": "How to contact customer support?", "answer": "You can contact customer support by emailing us at support@example.com or calling us at +1 (123) 456-7890."}
    ];

    getDocumentByQuestion(question: string): DocumentI {
        const lowercaseQuestion: string = question.toLowerCase();
        const document = this.documents.find(doc => doc.question.toLowerCase().includes(lowercaseQuestion));

        if (!document) {
            throw new NotFoundException(`Document with question '${question}' not found`);
        }

        return document;
    }
}