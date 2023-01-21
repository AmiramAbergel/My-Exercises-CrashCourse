import { TodoProps } from './todo';
import TodoItem from './TodoItem';

const Todos = ({ items }: TodoProps) => {
    return (
        <ul>
            {items.map((item) => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    );
};
export default Todos;
