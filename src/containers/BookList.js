import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Note the lack of 'export default'
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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

/**
 * Anything returned from this function will end up as props
 * on the BookList container.
 */
function mapDipatchToProps(dispatch) {
    /**
     * Whenever selectBook is called, the result should be passed
     * to all of our reducers.
     * The dispatch function receives actions like a filter, and sends
     * them out to all reducers in the application.
     */
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

/**
 * Take this component, take this mapped state to props and return a container.
 * Connect takes a function and a component and produces a container.
 * The container is a component that is aware of the state contained by Redux
 * Whenever our application state changes, this container will automatically re-render.
 * The object in the state function will be assigned as props to the component.
 * Make the dispatch method selectBook available as a prop
 */
export default connect(mapStateToProps, mapDipatchToProps)(BookList);