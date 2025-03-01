'use client'

import StyledComponentsRegistry from '@/components/styled/StyledComponentsRegister'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#8E1616',
    secondary: '#D84040',
    background: '#1D1616',
    text: '#EEEEEE',
    lightGrey: '#f5f5f5',
    darkGrey: '#353434',
    border: '#D84040',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

export function ContextProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
