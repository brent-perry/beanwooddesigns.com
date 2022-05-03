import { LitElement } from "lit";
export interface Button {
    src: string;
    href: string;
}
export declare class LinkButton extends LitElement {
    static styles: import("lit").CSSResult;
    initiallyHidden: boolean;
    href: string;
    src: string;
    alt: string;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
