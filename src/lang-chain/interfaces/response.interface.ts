interface HTTPresponseI <T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
    additionalData?: T extends 'success' ? string : number;
}
