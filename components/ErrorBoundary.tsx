'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-primary rounded-lg hover:bg-primary/80"
            >
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}