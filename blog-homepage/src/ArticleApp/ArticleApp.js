import React, { Component } from 'react';
import YourArticlesList from './YourArticlesList'
import MissedArticlesList from './MissedArticlesList'

class ArticleApp extends Component {

    render() {
        return (
            <div className="ArticleApp">
                <h3>For you</h3>
                <hr></hr>
                <YourArticlesList />
                <h3>In case you missed it</h3>
                <hr></hr>
                <MissedArticlesList />
            </div>
        )
    }
}

export default ArticleApp;
