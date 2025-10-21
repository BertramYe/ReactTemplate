import React from 'react'
import NotFound from '@/components/NotFound'

class ErrorBoundary extends React.Component<React.PropsWithChildren> {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(_error: Error): { hasError: boolean } {
    return {
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <NotFound/>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
