import { type DecoderPlugin } from '../../types';
import CoreValue from './lib-core-value';

export class CoreValueDecoder implements DecoderPlugin {
  id = 'core-value';
  name = '核心价值观';
  link = 'https://sym233.github.io/core-values-encoder/';

  checkString(input: string): number {
    if (/^[富强民主文明和谐自由平等公正法治爱国敬业诚信友善]+$/.test(input)) {
      return 100;
    }

    return 0;
  }

  decode(input: string): string {
    return CoreValue.decode(input);
  }

  encode(input: string): string {
    return CoreValue.encode(input);
  }
}
