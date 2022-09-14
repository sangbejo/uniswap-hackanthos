import './App.css'

import { createTheme, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { Route } from 'react-router-dom'

import CoinSwapper from './CoinSwapper/CoinSwapper'
import Web3Provider from './network'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D1529',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0D1529',
      contrastText: '#FFFFFF',
    },
  },
})

const App = () => {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <div className="header">Trade Smarter.</div>
          <div className="explanation">
            Our trading platform optimizes for least slippage and gas fee for any given trade by spanning the execution
            over a period of time.
          </div>
          <Web3Provider
            render={(network) => (
              <div>
                <Route exact path="/Alternative-Uniswap-Interface/">
                  <CoinSwapper network={network} />
                </Route>
              </div>
            )}
          ></Web3Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  )
}

export default App
