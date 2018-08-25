import { Image } from './image';

export class PhotographyPackage {
	photographerName: string;
	photographerIcon: string;
	price: number;
	packageDesc: string;
	featuredImages: Image[];// create model for this
	liked: boolean;
	packageLink: string;
	followers: number;
	packageSold: number;
}
