import { DatePipe } from "@angular/common";

export interface DestinationDTO {
    destinationID: number;
    geolocation: string;
    title: string;
    image: string;
    description: string;
    fromDate:DatePipe;
    toDate:DatePipe;
}

export interface DestinationNoIDDTO {
    geolocation: string;
    title: string;
    image: string;
    description: string;
}