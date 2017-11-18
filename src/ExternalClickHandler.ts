export class ExternalClickHandler {

    private logFunction: Function;

    constructor(logFunction: Function) {
        this.logFunction = logFunction;
    }

    trackClick(url: string, hash: string, clicked: boolean) {
        this.logFunction(url, hash, clicked);
    }

    clickCancel(url: string, hash: string) {
        this.trackClick(url, hash, false);
    }

    clickContinue(url: string, hash: string) {
        this.trackClick(url, hash, true);
    }

}