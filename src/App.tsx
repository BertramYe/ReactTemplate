import React from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import Transition from '@/components/Transition'
import { RouterProvider } from "react-router-dom";
import router from '@/routers';
const App: React.FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Transition/>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default App
