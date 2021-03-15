import { CarImage } from "./carImage";

export interface Car  {
    brand : string;
    color : string;
    modelYear : string;
    dealyPrice : number;
    description : string;
    carImages : CarImage[];
}