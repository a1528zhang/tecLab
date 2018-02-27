/**
 * Created by az on 2017/7/12.
 */
import * as React from "react";
import * as ReactDOM from 'react-dom';
import Contenxt from './contextTest/index.jsx';
import TsTest from './typescript/index';

class App extends React.Component<{}, {}> {
    render() {
        return(
            <div>
                <TsTest/>
            </div>
        )
    }
}

const div = document.getElementById('root');
ReactDOM.render(<App />, div);

