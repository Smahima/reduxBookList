import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="row">
                <h1>Book Worm: The Early Bird Catches the Worm</h1>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}

export default App;
