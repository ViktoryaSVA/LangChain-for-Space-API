import { Module } from '@nestjs/common';
import { LangChainModule } from "./lang-chain/lang-chain.module";

@Module({
  imports: [LangChainModule]
})
export class AppModule {}


