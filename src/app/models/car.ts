import { CarImage } from "./carImage";

export interface Car  {
    id : number;
    colorId : number;
    brandId : number;
    brand : string;
    color : string;
    modelYear : string;
    dealyPrice : number;
    description : string;
    carImages : CarImage[]
}