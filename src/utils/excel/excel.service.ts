import { Injectable } from '@nestjs/common';

const excelToJson = require('convert-excel-to-json');

@Injectable()
export class ExcelService {

    async convertToJSON(file: Express.Multer.File) {
        const result = excelToJson({
            sourceFile: `upload/${file.filename}`,
        });
        return result;
    }
}
