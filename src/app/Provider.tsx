'use client'
import { theme } from "@/themes";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import { fetcher } from '@/utils'
import GlobalSpinnerContextProvider from "@/contexts/GlobalSpinnerContext";
import { ShoppingCartContextProvider } from "@/contexts/ShoppingCartContext";
import { AuthContextProvider } from "@/contexts/AuthContext";
import GlobalSpinner from "@/components/organisms/GlobalSpinner";
import { ApiContext } from "@/types";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

const Provider = ({ children }: { children: React.ReactElement }) => {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          fetcher,
        }}
      >
        <GlobalSpinnerContextProvider>
          <ShoppingCartContextProvider>
            <AuthContextProvider context={context}>
              <GlobalSpinner />
              {children}
            </AuthContextProvider>
          </ShoppingCartContextProvider>
        </GlobalSpinnerContextProvider>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default Provider;