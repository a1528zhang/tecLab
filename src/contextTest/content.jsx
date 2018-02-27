import React, { createContext, Component } from "react";
import {Context} from './index';

class DemoContent extends Component {
    render() {
        return (
            <Context.Consumer value={{
                dataOne: 3,
                dataTwo: 2,}}>
                {context => (
                    <h1>
                        {context.dataOne}: {context.dataTwo}
                    </h1>
                    )
                }
            </Context.Consumer>
        );
    }
}

export default class Title extends Component {
    render() {
        return (
            <DemoContent/>
        );
    }
}
