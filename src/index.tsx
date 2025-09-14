import React from 'react'
import ErrorBoundary from 'src/components/ErrorBoundary'
import Transition from 'src/components/Transition'
import HomePage from 'src/pages/Home'
const App: React.FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <React.Suspense
        fallback={(
          <Transition/>
        )}
      >
       <HomePage />
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default App
