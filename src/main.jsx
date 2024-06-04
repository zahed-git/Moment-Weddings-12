import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './BrowserRouter';
import AuthProviders from './Privates_providers/AuthProviders';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      <AuthProviders>
      <ThemeProvider>
      <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}/>
      </div>
      </ThemeProvider>
      </AuthProviders>
      </QueryClientProvider>
     </HelmetProvider>
  </React.StrictMode>,
)
