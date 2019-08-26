import { checker } from './checker.model';

export class CheckerService {
    private checkers: checker[] = [
        new checker("email", "user@domaim.com", "[A-Z]+", "email"),  //0
        new checker("phone", "3999999999", "^[3]{1}[0-9]{9}$", "number")   //1
    ];

    public getChecker(id: number){
        return this.checkers[id];
    }

    regexpNumber = new RegExp('^[+ 0-9]{5}$');


    private patterns: string[] = ["[A-Z]+", "^[3]{1}[0-9]{9}$"];

    public getPatterns(id: number){
        return this.patterns[id];
    }
}