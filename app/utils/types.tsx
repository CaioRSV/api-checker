export const ToleranceTypes = {
    ONLY_ACCEPT: "onlyAccept",
    ALLOW_CLIENT_ERRORS: "allowClientErrors",
} as const;

export type toleranceType = typeof ToleranceTypes[keyof typeof ToleranceTypes];

export type ApiItemType = {
    id: number;
    room_id: number;
    label?: string;
    url: string;
    checkInterval?: number;
    toleranceType?: toleranceType;
    allowRedirect?: boolean;
};