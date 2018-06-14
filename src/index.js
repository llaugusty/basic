import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import ListingDetail from './components/listing-details';
import ListingCreate from './components/listing-create';
import {
    HashRouter,
    Route
  } from "react-router-dom";

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

// Now we can render our application into it
render( 
    <HashRouter>
        <div>
        <a href="/">Home</a>
        <a href="/#/create-listing">Create listing</a>
        <Route path="/" exact     component={ App } />
        <Route path="/listing/:id" exact component={ ListingDetail } />
        <Route path="/create-listing" exact component={ ListingCreate } />
        </div>
    </HashRouter>, document.getElementById('root') );
