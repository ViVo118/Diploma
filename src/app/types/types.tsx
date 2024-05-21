import React from "react";
import { ReactNode } from 'react';

export type LayoutProps = {
    children: ReactNode;
}
export type ContainerProps = {
    children: ReactNode;
    className: string;
}
export type ButtonProps = {
    children: string;
    className: string;
}
export type ListItem = {
    id: number;
    title: string;
    text: string;
}
export type NavigationItem = {
    id: number;
    title: string | React.ReactNode;
    path: string;
};
export type ProductCardItem = {
    id: number;
    img: React.ReactNode;
    title: string;
    button: React.ReactNode;
};

export type CardSaleProps = {
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
    button: React.ReactNode;
};
