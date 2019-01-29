import React, { Component } from 'react';
import axios from 'axios';

const withRequest = (url) => (WrappedComponen) => {
    return class extends Component {

        state = {
            data: null
        }

        async initialize() {
            try {
                const response = await axios.get(url);
                this.setState({
                    data: response.data
                });
            } catch (e) {
                console.log(e);
            }
        }

        componentDidMount() {
            this.initialize();
            this.interval = setInterval(() => {
                this.initialize();
            }, 15000);
        }

        render() {
            const { data } = this.state;
            return (
                <WrappedComponen {...this.props} data={data} />
            )
        }
    }
}

export default withRequest;
