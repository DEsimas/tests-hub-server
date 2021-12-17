import { Controller, Get } from "@nestjs/common";
import { TypingTesterService } from "./TypingTester.service";

@Controller('/TypingTester')
export class TypingTesterController {
    constructor(private readonly TypingTesterService: TypingTesterService) {}

    @Get()
    findAll(): Promise<string> {
        return this.TypingTesterService.findAll();
    }
}