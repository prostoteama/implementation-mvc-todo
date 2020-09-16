import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  Header,
  MainSection,
  Todo,
  IState,
  addTodo,
  editTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteTodo,
  bla
} from '../../todos/';

interface AppProps {
  todos: IState;
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps> {
  
  componentDidMount(){
    bla()
  }

  render() {
    const { todos, dispatch } = this.props;

    return (
      <div className="todoapp">
        <Header addTodo={(text: string) => dispatch(addTodo(text))} />
        <MainSection
            todos={todos}
            editTodo={(t,s) => dispatch(editTodo(t, s))}
            deleteTodo={(t) => dispatch(deleteTodo(t))}
            completeTodo={(t) => dispatch(completeTodo(t))}
            clearCompleted={() => dispatch(clearCompleted())}
            completeAll={() => dispatch(completeAll())}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
