import React from 'react';
import { RootNavivgator } from './src/Navigations';
import { CookiesProvider } from "react-cookie";

export default function App(){
  return (
    <CookiesProvider>
      <RootNavivgator />
    </CookiesProvider>
  )
}