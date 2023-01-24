interface IRawProductData {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
}

interface IProduct {
  brand: string;
  createdAt: Date;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: number;
  updatedAt: Date;
}
