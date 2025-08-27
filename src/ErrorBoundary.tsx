import React, { ReactNode } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    isError: boolean,
    error?: Error
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { isError: false }
    }

    static getDerivedStateFromError(error: Error) {
        return { isError: true, error }
    }

    render() {
        if (this.state.isError) {
            return (
                <div>
                    <h3>Something went wrong</h3>
                    <p>{this.state.error?.message}</p>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;