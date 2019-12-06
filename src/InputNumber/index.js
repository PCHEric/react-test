import React, {
    Component
} from "react";

class InputNumvber extends Component {
    constructor(props) {
        super(props)
        const defaultValue = this.props.defaultValue
        this.state = {
            innerValue: defaultValue
        }
    }

    get isControl() {
        return 'value' in this.props
    }

    get value() {
        if (this.isControl) {
            return this.props.value
        } else {
            return this.state.innerValue
        }
    }

    render() {
        return (<input value={this.value}
            onChange={
                e => {
                    if (!this.isControl) {
                        this.setState({
                            innerValue: this.props.defaultValue
                        })
                    }
                    if (!(/^\d+$/.test(e.target.value))) {
                        alert('please input number')
                    } else {
                        this.props.onChange(e)
                    }
                }
            }
        />

        );
    }
}


export default InputNumvber