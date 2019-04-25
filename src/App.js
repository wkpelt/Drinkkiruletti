import React from 'react'
import './App.css'
import Main from './components/Main'
import { Content, Drawer, Navigation, Layout } from 'react-mdl'
import { Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Drawer title="">
                    <Navigation>
                        <Link to="/drinkkiruletti">Drinkkiruletti</Link>
                        <Link to="/drinkkiruletti/juomat">Juomat</Link>
                        <Link to="/drinkkiruletti/who">Ketä tän teki</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        )
    }
}

export default App
