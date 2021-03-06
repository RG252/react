import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: "earth"
        };
        console.log("Hey Constructor");
    }

    componentDidMount() {
        this.setState({ planet: "jupiter"});
    }

    // static getDerivedStateFromProps(prop, state) {
    //     console.log("im from get derived state from props");
    //     return {planet: "jupiter"};
    // }

    shouldComponentUpdate(nextProp, nextState) {
        console.log("from shouldComponentUpdate ");
        console.log({
            nextProp,
            nextState,
        });
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("from getSnapshotBeforeUpdate ");
        console.log({ prevProp, prevState });
        return true;
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    componentWillUnmount(){
        console.log("bye bye");
    }

    render() {
        console.log("Hey Render");
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <p>
                    {this.props.description}
                </p>
                <h4>
                    {this.state.planet}
                </h4>
            </div>
        );
    }
}

export default User ;