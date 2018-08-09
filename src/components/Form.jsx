import React from 'react';

export default class Form extends React.Component {

    render () {
       return (
            <form onSubmit={this.props.handleSubmit.bind(this)} className="col s12">
                <div className="row">
                    <div className="input-field col s3">
                        <input type="text" name="currentTitle" value={this.props.currentTitle}
                               onChange={this.props.handleChange.bind(this)}/>
                    </div>
                    <div className="input-field col s7">
                        <input type="text" name="currentDetails" value={this.props.currentDetails}
                               onChange={this.props.handleChange.bind(this)}/>
                    </div>
                    <div className="input-field col s2">
                        <button className="btn-large waves-effect waves-light" type={"submit"} name={"action"}>
                            Add Note
                        </button>
                    </div>
                </div>
            </form>
       );
    }
}