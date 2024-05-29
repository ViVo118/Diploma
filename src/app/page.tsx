'use client'
import Poster from "./components/modules/poster/poster";
import Products from "./components/modules/products/products";
import Sales from "./components/modules/sales/sales";
import Advantages from "./components/modules/advantages/advantages";
import LayoutComponent from "./components/modules/layout/layout";
import './globalStyles/media.css'

export default function Home() {
  
  return (
      <LayoutComponent>
      <Poster/>
      <Products/>
      <Sales/>
      <Advantages/>
      </LayoutComponent>
  );
}
