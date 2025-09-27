import React from 'react';

export function withLoading<P>(Component: React.ComponentType<P>) {
  return function WithLoadingComponent(props: P & { loading: boolean }) {
    if (props.loading) {
      return <div>Загрузка...</div>;
    }
    return <Component {...props} />;
  };
}
