import React, {Component, PropsWithChildren} from 'react';

import Error from './Error';

type PropsType = PropsWithChildren & {};

type StateType = {
  hasError: boolean;
};

class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch = () => {
    this.setState({hasError: true});
  };

  render() {
    const {children} = this.props;
    const {hasError} = this.state;
    if (hasError) {
      return <Error />;
    }
    return children;
  }
}

export default ErrorBoundary;
