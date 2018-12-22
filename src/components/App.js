import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import NewEntryPage from './pages/NewEntryPage';
import CategorySelectionPage from './pages/CategorySelectionPage';

class App extends Component {
    state = {
        categories: ["food", "thoughts", "romance"]
    }
    
    render() {
        const { categories } = this.state
        return(
            <div>
                <BrowserRouter>
                    <div>
                        
                        <Route exact={true} path="/" component={HomePage}/>
                        <Route exact path="/category" render={(props) => <CategorySelectionPage {...props} categories={categories}/>}/>
                        <Route 
                            exact 
                            path="/entry/new/:index" 
                            render={(props) => <NewEntryPage {...props} categories={categories}/>}/>
                    </div>
                </BrowserRouter>                
            </div>
        );
    }
}

export default App;
