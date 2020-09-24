import React, { Component } from 'react';

class SlotMachine extends Component {
    render() {

        const {s1, s2, s3} = this.props;

        const winner = (s1 === s2) && (s2 === s3);

        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{winner ? "You Are Winner 😀😀😀" : "You Are Loser 😑😑😑"}</p>
                <span>_________</span>
            </div>
        );
    }
}

export default SlotMachine;