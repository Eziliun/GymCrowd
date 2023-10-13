export interface AddressResponse {
    message: string,
    result: iMarker[],
    status: boolean
}

export interface iMarker {
    latitude?: number,
    longitude?: number,
    displayName?: string,
    address: string[],
}
