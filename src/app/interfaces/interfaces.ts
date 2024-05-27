export interface CoffeProduct {
    id: string;
    title: string;
    name: string;
    description: string;
    country: string;
    sour: number;
    bitter: number;
    type: string;
    roast: number;
    weight: number;
    price: number;
    discount: boolean;
    new: number;
    img: string;
}

export interface CartState {
    items: CartItem[];
  }
  

export  interface AddToCartButtonProps {
    product: CoffeProduct;
    className: string;
  }
  
export interface CartItem extends CoffeProduct {
    quantity: number;
}

export interface CartProps {
    cartItems: CartItem[];
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
  }

export interface CartProductCardProps {
    cartItems: CartItem[];
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
  }
  
export  interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  }