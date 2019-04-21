import React from 'react';
import axios from 'axios';

import PageTabs from './PageTabs';
import Page1 from './Page1';
import Page2 from './Page2';
import TaskBoard from './TaskBoard';

class App extends React.Component {
  state = {
    view: 'page1',
    tasks: [],
    errorMessage: ''
  }
  
  onViewChange(view) {
    this.setState({ view });
  }

  wrapPage(jsx) {
    const { view } = this.state;
    return (
      <div className="container">
        <PageTabs currentView={view}
                  onViewChange={this.onViewChange.bind(this)}/>
        {jsx}
      </div>
    );
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
        .then(response => {
          this.setState({ tasks: response.data });
        }).catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }

  render() {
    const { view } = this.state;

    switch (view) {
      case 'page1':
        return (this.wrapPage(
          <Page1 />
        ));
      case 'page2':
        return (this.wrapPage(
          <Page2 />
        ));
      case 'page3':
        return (this.wrapPage(
          <TaskBoard tasks={this.state.tasks} />
        ));
      default:
        return (this.wrapPage(
          <h2>Invalid Tab, choose another</h2>
        ));
    }

  }
}

export default App;