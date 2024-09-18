import * as React from 'react';

import MainAppBar from '@/app/components/MainAppBar';
import theme from '@/app/theme';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <MainAppBar />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
