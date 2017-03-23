import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Note the lack of 'export default'
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

/**
 * Purpose: take application state as an argument.
 * Whatever is returned will show up as props inside of BookList
 */
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDipatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

/**
 * Take this component, take this mapped state to props and return a container.
 * Connect takes a function and a component and produces a container.
 * The container is a component that is aware of the state contained by Redux
 * Whenever our application state changes, this container will automatically re-render.
 * The object in the state function will be assigned as props to the component.
 */
export default connect(mapStateToProps, mapDipatchToProps)(BookList);