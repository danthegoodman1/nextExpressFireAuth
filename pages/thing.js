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
        let list = Object.keys(this.props.query).map(ele => {
            return <h3>{this.props.query[ele]}</h3>
        })
        return (
            <div>
                <h1>PAGE</h1>
                <h2>From the url:</h2>
                {list}
            </div>
        )
    }
}

export default Index