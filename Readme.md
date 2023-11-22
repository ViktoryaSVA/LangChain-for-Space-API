## LangChain

LangChain is a text processing application designed to provide predefined responses based on identified keywords or phrases in the input text.

## Application Logic
### Document Structure
LangChain maintains a set of documents, each with a unique identifier (id), a question (question), and an answer (answer).

### Processing Text
1. **Input Validation: When a text input is received, the application checks if it's a valid text string; otherwise, it throws a BadRequestException.**
2. **Text Processing: The application converts the text to lowercase for case-insensitive matching and identifies individual words using a regular expression (/\b\w+\b/g).**

### Response Generation
1. **Document Search: For each word in the text, the application searches for a matching question in the predefined documents.**
2. **Response Handling: If a matching document is found and hasn't been processed before, it adds the document's response to the result and marks the document as processed. If a document has already been processed, the original word is added to the result.**

### Error Handling
1. **If a document is not found, it throws a NotFoundException.**
2. **If the input is not a valid text string, it throws a BadRequestException.**
3. **Any other processing errors result in a generic HttpException with an internal server error status.**
### Integration Points
LangChain can be integrated into applications in various scenarios:

1. **Customer Support Chatbots: Use LangChain to process user queries and provide predefined responses for common customer support questions.**
2. **Knowledge Base Systems: Integrate LangChain into knowledge base systems to automatically generate responses based on identified keywords.**
3. **Educational Platforms: Employ LangChain to process and respond to user queries in educational platforms, offering information on specific topics.**
4. **IoT Applications: Utilize LangChain in IoT applications where predefined responses are required for specific commands or queries.**
5. **Command-Line Interfaces (CLI): Integrate LangChain into CLI applications for automatic response generation based on user input.**

## Getting Started
### Prerequisites
1. **Node.js**
2. **npm**


### Integration

To integrate LangChain into your application:

1. **Install Dependencies:**
   ```bash
   npm install

2. **Running the app:**

   ```bash
   npm run build
   ```
   ```bash
   npm run start
   ```

### List of available questions from astronauts
1. **Perform a diagnostic of life support systems.**
2. **What steps are needed to connect new equipment?**
3. **Send data on orbital exit plans for the upcoming week.**
4. **Analyze radiation sensor data for the past 24 hours.**
5. **Initiate a scientific experiment to study Earth's surface markings.**
6. **Configure cooling systems for optimal performance.**
7. **How to contact customer support?**

### Examples of request

Send a POST request to 

```bash
http://localhost:3000/app/process-text
```
with a JSON payload containing the input text:
```bash
{
  "text": "What steps are needed to connect new equipment?"
}
```
The application will respond with the processed text.

### Customization
LangChain comes with a predefined set of documents in LangChainService. You can customize these documents to match the specific knowledge base of your application.