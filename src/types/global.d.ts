interface IData {
  products: IRawProductData[];
}

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
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: number;
  updatedAt: string;
}

interface IState {
  products: IProduct[];
  totalPrice: number;
  totalItems: number;
}

interface IAction {
  type: string;
  payload: IProduct;
}
