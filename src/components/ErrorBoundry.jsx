import React, { useEffect, useState } from 'react'

const ErrorBoundary = ({children}) => {

  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const componentDidCatch = (error, info) => {
      setHasError(true);
    };

    return () => {
      window.removeEventListener('error', componentDidCatch);
    };
  }, []);

  return (
    <div>
        {hasError ? <h1>Something went wrong.</h1> : children}
    </div>
  )
  }

export default ErrorBoundary