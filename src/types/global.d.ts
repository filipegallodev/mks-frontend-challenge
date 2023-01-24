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
  count?: number;
}

interface IState {
  products: IProduct[];
  totalPrice: number;
  totalItems: number;
  modalOpen: boolean;
}

interface IAction {
  type: string;
  payload: IProduct;
}
