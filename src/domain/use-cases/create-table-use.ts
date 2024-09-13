

export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

   constructor(
      /**
       * DI - Dependency Injection
       */
    ){}

    execute({ base, limit = 10 }: CreateTableOptions )  {
        let outputMessage='';
        for ( let x=1; x<=limit; x++) {
            outputMessage += `${base} x ${x} = ${ base * x }\n`;
        }
        return outputMessage;
    }
}


