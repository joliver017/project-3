import React, { Component } from 'react'

class Home extends Component {
    // constructor() {
    //     super()
    // }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Feed will go here</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" alt="test" />
            </div>
        )

    }
}

export default Home
