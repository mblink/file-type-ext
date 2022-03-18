import { FileExtension as FT, FileTypeResult as FTR, MimeType as MT } from "file-type/browser";
export declare type FileType = FT | "msi" | "doc" | "xls" | "ppt";
export declare type MimeType = MT | 'application/x-msi' | 'application/msword' | 'application/vnd.ms-excel' | 'application/vnd.ms-powerpoint';
export declare type FileTypeResult = {
    ext: FTR["ext"] | FileType;
    mime: FTR["mime"] | MimeType;
    minimumRequiredBytes?: number;
};
export declare const fileTypeExt: {
    (input: Buffer | Uint8Array | ArrayBuffer): Promise<FileTypeResult | undefined>;
    stream(readableStream: NodeJS.ReadableStream): Promise<NodeJS.ReadableStream>;
};
export declare const minimumBytes = 4100;
