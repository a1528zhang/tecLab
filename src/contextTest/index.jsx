import React, { createContext, Component } from "react";
import Title from './content';

export const Context = createContext({
    dataOne: 1,
    dataTwo: 2,
})

export default class DemoComp extends Component {
    render() {
        return (
            <Context.Provider value={{
                dataOne: 3,
                dataTwo: 2,}}>
                <Title/>
            </Context.Provider>
        )
    }
}