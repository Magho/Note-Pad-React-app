import React from 'react';
import Note from './Note';

export default class Grid extends React.Component {

    renderItems () {
        return this.props.notes.map((note) => {
            return <Note key={note.id} note={note}/>
        });
    }

    render () {
        return (
            <div className="row">
                <ul>
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}
