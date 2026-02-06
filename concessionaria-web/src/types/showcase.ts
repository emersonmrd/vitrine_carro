export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
}

export interface Showcase {
  company: string;
  slogan: string;
  description: string;
  highlights: Vehicle[];
}
