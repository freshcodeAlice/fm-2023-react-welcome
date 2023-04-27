import React, { Component } from 'react';

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: true,
            error: null
        }
    }

    componentDidMount() {
        this.props.loadData()
        .then(data => {
            this.setState({
                data
            })
        })
        .catch(error => {
            this.setState({
                error
            })
        })
        .finally(() => {
            this.setState({
                isFetching: false
            })
        })
    }

    
    render() {
        return this.props.children(this.state);
    }
}

export default DataProvider;
