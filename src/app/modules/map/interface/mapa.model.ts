export interface AddressResponse {
    message: string,
    result: iMarker[],
    status: boolean
}

export interface iMarker {
    latitude?: number,
    longitude?: number,
    displayName?: string,
    address: iAddress,
}

export interface markerRequest {
    address: string
}

export interface iAddress {
    road?: string,
    residential: string,
    suburb: string,
    city: string,
    state: string,
    municipality: string,
    country:  string,
    countryCode: string,
    houseNumber: string,
    postcode: string
}
