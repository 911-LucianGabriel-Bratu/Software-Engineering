export interface DestinationDTO {
    destinationID: number;
    geolocation: string;
    title: string;
    image: string;
    description: string;
}

export interface DestinationNoIDDTO {
    geolocation: string;
    title: string;
    image: string;
    description: string;
}