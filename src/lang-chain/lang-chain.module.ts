import { Module } from '@nestjs/common';
import { LangChainController } from "./lang-chain.controller";
import { LangChainService } from "./lang-chain.service";
import {DocumentService} from "./services/document.service";

@Module({
  controllers: [LangChainController],
  providers: [LangChainService, DocumentService],
})
export class LangChainModule {}


