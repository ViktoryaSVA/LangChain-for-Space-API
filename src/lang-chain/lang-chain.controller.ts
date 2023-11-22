import { Body, Controller, HttpException, HttpStatus, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LangChainService } from "./lang-chain.service";
import { TextDto } from "./dto/text.dto";

@Controller('app')
export class LangChainController {
    constructor(@Inject(LangChainService) private readonly langChainService: LangChainService) {}

    @Post('/process-text')
    @UsePipes(new ValidationPipe({ transform: true }))
    processText(@Body() textDto: TextDto): HTTPresponseI<'success' | 'failed'> {
        try {
            const processedText = this.langChainService.processText(textDto.text);
            return {
                code: 200,
                data: processedText
            };
        } catch (error) {
            throw new HttpException({
                code: 500,
                data: `Error processing text: ${error.message}`
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
