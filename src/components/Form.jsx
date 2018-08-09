import React from 'react';

export default class Form extends React.Component {

    handleChange (event) {
        this.props.handleChange(event)
    }

    handleSubmit (event) {
        this.props.handleSubmit(event);
    }

    render () {
       return (
            <form onSubmit={this.props.handleSubmit}>
                <label> tile :
                    <input type="text" name="currentTitle" value={this.props.currentTitle}
                           onChange={this.props.handleChange}/>
                </label>
                <textarea name="currentDetails" value={this.props.currentDetails}
                          onChange={this.props.handleChange}/>
                <div><input type={"submit"} value={"Add note"}/></div>
            </form>
       );
    }
}