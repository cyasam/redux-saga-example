import React from "react";

const Loader = (WrappedComponent, selectData) => {
  return class extends React.Component {
    state = {
      loading: true,
      data: null,
      error: null
    };

    componentDidMount() {
      selectData()
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          throw new Error("Network response was not ok.");
        })
        .then(data => {
          this.setState(() => ({
            loading: false,
            data,
            error: null
          }));
        })
        .catch(error => {
          this.setState(() => ({
            loading: false,
            error
          }));
        });
    }

    render() {
      if (this.state.loading) {
        return <p>Loadingggggg...</p>;
      }

      if (this.state.error) {
        return <p>{this.state.error.message}</p>;
      }

      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default Loader;
