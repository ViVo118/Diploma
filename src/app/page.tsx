'use client'
import Poster from "./components/modules/poster/poster";
import Products from "./components/modules/products/products";
import Sales from "./components/modules/sales/sales";
import Advantages from "./components/modules/advantages/advantages";
import LayoutComponent from "./components/modules/layout/layout";

import { Provider } from "react-redux";

import { store } from "./redux/store";


export default function Home() {
  return (
    <Provider store={store}>
      <LayoutComponent>
      <Poster/>
      <Products/>
      <Sales/>
      <Advantages/>
      </LayoutComponent>
    </Provider>
  );
}
