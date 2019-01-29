import React from 'react';
import withRequest from '../service/withRequest'
import DashboardPost from './DashboardPost'

class DashboardAPI extends React.Component {
    render() {
        const src = '/api/dashboard/?format=json';
        const PostWithData = withRequest(src)(DashboardPost)

        return (
            <div>
                <PostWithData  />
            </div>
        );
    }
}



export default DashboardAPI;
