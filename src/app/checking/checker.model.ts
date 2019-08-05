export class checker {
    private type: string;
    private placeHolder: String;
    private pattern: string;
    private inputType: string;

    constructor(type: string, placeHolder: String, pattern: string, inputType: string){
        this.type = type;
        this.placeHolder = placeHolder;
        this.pattern = pattern;
        this.inputType = inputType
    }

    public getType(){
        return this.type;
    }

    public getPlaceHolder(){
        return this.placeHolder;
    }

    public getPattern(){
        return this.pattern;
    }

    public getInputType(){
        return this.inputType;
    }
}