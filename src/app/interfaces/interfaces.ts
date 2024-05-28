import React, { MouseEventHandler } from "react";
import { ReactNode } from 'react';
import { SubmitHandler } from "react-hook-form";

export interface LayoutProps {
  children: ReactNode;
}
export interface ContainerProps {
  children: ReactNode;
  className: string;
}
export interface ButtonProps {
  children: string;
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ListItem {
  id: number;
  title: string;
  text: string;
}

export interface ProductCardItem {
  id: number;
  img: React.ReactNode;
  title: string;
  link: React.ReactNode;
};

export interface CoffeeCatalogCardProps  {
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
  button?: React.ReactNode;
  isAddedToCart?: boolean;
};

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
  
export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  }
export interface Filters {
    roast: string;
    bitterness: string;
    sourness: string;
    country: string;
    coffeeType: string;
    discount: boolean;
  }

export interface DeliveryFormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    address: string;
  }

export interface DeliveryFormField {
    name: keyof DeliveryFormData;
    label: string;
    type: string;
    validation: object;
  }

export interface DeliveryFormProps {
    fields: DeliveryFormField[];
    onSubmit: SubmitHandler<DeliveryFormData>;
    submitButtonLabel: string;
  }