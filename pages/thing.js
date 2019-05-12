import React from 'react'
import Router, { withRouter } from 'next/router'

class Index extends React.Component {
    static async getInitialProps({ query }) {
        // console.log(req.headers)
        console.log(Object.keys(query))
        Object.keys(query).forEach(ele => {
            console.log(query)
        })
        return { query }
    }

    componentDidMount() {
        if (this.props.query.replace === 'true') { // http://localhost:3000/at/hehe?par=hey&replace=true
            Router.replace('/thing', '/ting/go/bap', { // (this page, replacement, {options})
                shallow: true
            })
        }
    }

    render() {
        console.log(this.props.query.sll)
        if (this.props.query.rere) console.log(this.props.query.rere)
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