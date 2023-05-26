import { DatePipe } from "@angular/common";

export interface BookedDTO {
    bookID?: number;
    fromDate?: DatePipe;
    toDate?: DatePipe;
}