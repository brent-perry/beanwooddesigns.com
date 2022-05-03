import { LitElement } from "lit";
export interface EnlargeDetails {
    src: string;
}
export declare class ImageModal extends LitElement {
    static styles: import("lit").CSSResult;
    enlargeDetails: EnlargeDetails;
    close(): void;
    onUpdate(opened: boolean): void;
    open: (details: EnlargeDetails) => void;
    render(): import("lit-html").TemplateResult<1>;
}
