import React from 'react';

class TaskBoard extends React.Component {

    getColumnList(column) {
        return this.props.tasks.filter(
            function (task) {
                return task.column==column;
            }
        )
    }

    render() {


        return (<div>
            <div width="50px" float="left">
            <ul>
                <li> {this.getColumnList("todo").title}</li>
            </ul>
            </div>
            <div width="50px" float="left">
                <ul>
                    <li> {this.getColumnList("inProgress").title}</li>
                </ul>
            </div>
            <div width="50px" float="left">
                <ul>
                    <li> {this.getColumnList("review").title}</li>
                </ul>
            </div>
            <div width="50px" float="left">
                <ul>
                    <li> {this.getColumnList("done").title}</li>
                </ul>
            </div>
            </div>)
    }



};


export default TaskBoard