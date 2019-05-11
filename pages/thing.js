import React from 'react'

class Index extends React.Component {
    static async getInitialProps({ query }) {
        // console.log(req.headers)
        console.log(Object.keys(query))
        Object.keys(query).forEach(ele => {
            console.log(query)
        })
        return { query }
    }

    render() {
        console.log(this.props.query.sll)
        console.log(this.props.query.ya)
        return (
            <h1>PAGE</h1>
        )
    }
}

export default Index