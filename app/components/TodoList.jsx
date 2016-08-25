import { PropTypes } from 'react'
import PureComponent from './PureComponent'
import Todo from './Todo'

class TodoList extends PureComponent {

  static propTypes: {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { todos, onTodoClick } = this.props;

    return (
      <ul>
        { todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        ))}
      </ul>
    )
  }
}

export default TodoList
