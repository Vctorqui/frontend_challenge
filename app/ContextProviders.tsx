'use client'

import StyledComponentsRegistry from '@/components/styled/StyledComponentsRegister'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { closeSnackbar, SnackbarProvider } from 'notistack'
import { IconButton } from '@/components/styled/StyledComponent'
import { Cross1Icon } from '@radix-ui/react-icons'

const theme = {
  colors: {
    primary: '#7A1CAC',
    secondary: '#AD49E1',
    background: '#1D1616',
    text: '#EEEEEE',
    lightGrey: '#f5f5f5',
    darkGrey: '#353434',
    border: '#AD49E1',
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
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          action={(snackbarId) => (
            <IconButton onClick={() => closeSnackbar(snackbarId)}>
              <Cross1Icon />
            </IconButton>
          )}
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
