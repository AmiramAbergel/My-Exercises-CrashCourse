import { TodoItemProps } from './todo';

const TodoItem = ({ text }: TodoItemProps) => {
    return <li>{text}</li>;
};

export default TodoItem;
