import { Operator } from '../types/operator';
import { Prefix } from '../types/prefix';

export interface Filter {
    prefix?: Prefix;
    item: string;
    operator: Operator;
    input?: string;
}
