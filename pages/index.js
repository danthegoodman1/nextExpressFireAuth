import React from 'react'

class Index extends React.Component {
    static async getInitialProps({ req }) {
        // console.log(req.headers)
        // console.log(req.query)
        const thing = 'hey'
        return { thing }
    }

    render() {
        console.log(this.props.thing)
        return (
            <h1>Wee</h1>
        )
    }
}

export default Index