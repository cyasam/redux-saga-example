import React from "react";

const Loader = WrappedComponent => {
  return class extends React.Component {
    render() {
      const { loading, error, ...otherProps } = this.props;
      if (loading) {
        return <p>Loadingggggg...</p>;
      }

      if (error) {
        return <p>{error.message}</p>;
      }

      return <WrappedComponent {...otherProps} />;
    }
  };
};

export default Loader;
