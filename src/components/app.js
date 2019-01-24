import React from 'react';
import Counter from './counter';

class App extends React.Component {





    render() {
        return (
            <div>
                <div onClick={() => { console.log(this.counter) }}>点击获取ref实例</div>
                <Counter ref={(counter) => { this.counter = counter }} />
            </div>

        )
    }
}

export default App;