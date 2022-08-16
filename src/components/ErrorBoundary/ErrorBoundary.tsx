import React, { Component } from "react";

type Props = {
  children: React.ReactNode;
};

type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p>Something broke</p>;
    }
    return this.props.children;
  }
}
