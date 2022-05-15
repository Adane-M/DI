import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null
        };
    }

    static getDerivedStatFormError(error) {
        return { error: error };

    }
    componentDidCatch(error, errorInfo) {
        console.log(`error, errorInfo`, error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;