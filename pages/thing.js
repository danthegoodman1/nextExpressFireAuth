import React from 'react'

class Index extends React.Component {
    static async getInitialProps({ query }) {
        // console.log(req.headers)
        console.log(Object.keys(query))
        Object.keys(query).forEach(ele => {
            console.log(query)
        })
        const thing = 'heyo'
        return { thing }
    }

    render() {
        console.log(this.props.thing)
        return (
            <h1>PAGE</h1>
        )
    }
}

export default Index