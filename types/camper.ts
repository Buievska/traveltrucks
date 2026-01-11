export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface CamperImage {
  original?: string;
  thumb?: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  transmission: string;
  engine: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  gallery: CamperImage[];
  reviews: Review[];
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

export interface FilterState {
  location: string;
  form: string;
  AC: boolean;
  transmission: string;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
}
