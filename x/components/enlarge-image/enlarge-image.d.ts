import { LitElement } from "lit";
import { EnlargeDetails } from "../modal/image-modal";
export declare class EnlargeImage extends LitElement {
    static styles: import("lit").CSSResult;
    initiallyHidden: boolean;
    src: string;
    large: string;
    alt: string;
    firstUpdated(): void;
    enlargeImage(): void;
    openModal(details: EnlargeDetails): void;
    render(): import("lit-html").TemplateResult<1>;
}
