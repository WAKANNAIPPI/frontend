import React from 'react';
import { RootNavivgator } from './src/Navigations';
import { CookiesProvider} from 'react-cookie';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://serverName:port';

export default function App(){
    return (
      <CookiesProvider>
        <RootNavivgator />
      </CookiesProvider>
    )
}