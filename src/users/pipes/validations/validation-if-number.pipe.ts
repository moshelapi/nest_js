import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class IsNumber implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
      const id = parseInt(value);
      if (isNaN(id)) {
        throw new BadRequestException('ID must yo be a number');
      }
      return value
    }
}
