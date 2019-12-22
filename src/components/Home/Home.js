import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
export default class Home extends Component {
    render() {
        return (
            <div class="home__text">
                <h1>Joyeux Noël !!!</h1>
                <h3>Alors, tu croyais ne pas avoir de cadeaux de noël ? Juste ton petit 45 tours</h3>
                <NavLink class="home__navlink" to="/surprise">Clique Ici, t'auras peut être une surprise</NavLink>
            </div>
        )
    }
}
