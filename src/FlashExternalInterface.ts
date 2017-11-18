export class FlashExternalInterface {

    /* Sulake Fields */

    private loginLogEnabled: boolean = false;
    private nielsenUrl: string = null;
    private clientInited: boolean = false;
    private clientElement: HTMLElement = null;
    private lastVisistedRoomId: number = -1;

    /* Custom Fields */
    private linkWarning: boolean = false;

    constructor(linkWarning: boolean) {
        this.linkWarning = linkWarning;
    }

    openExternalLink(link: string): void {
        window.open(this.linkWarning ? `/external/${btoa(link)}`:`http://${link}`);
    }

}