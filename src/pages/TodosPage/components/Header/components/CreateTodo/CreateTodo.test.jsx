import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import CreateTodo from './CreateTodo';

describe('test CreateTodo', () => {
    const mockAddTodo = jest.fn();
    const mockClose = jest.fn();

    beforeEach(() => {
        mockAddTodo.mockClear();
        mockClose.mockClear();
    });

    it('test render', () => {
        render(<CreateTodo addTodo={mockAddTodo} close={mockClose} />);

        expect(screen.getByText('Создание задачи')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Введите название задачи')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Введите описание задачи')).toBeInTheDocument();
        expect(screen.getByDisplayValue('создать')).toBeInTheDocument();
    });

    it('test input', () => {
        render(<CreateTodo addTodo={mockAddTodo} close={mockClose} />);

        fireEvent.change(screen.getByPlaceholderText('Введите название задачи'), { target: { value: 'task' } });
        fireEvent.change(screen.getByPlaceholderText('Введите описание задачи'), { target: { value: 'description' } });

        expect(screen.getByPlaceholderText('Введите название задачи')).toHaveValue('task');
        expect(screen.getByPlaceholderText('Введите описание задачи')).toHaveValue('description');
    });

    it('test submission', () => {
        render(<CreateTodo addTodo={mockAddTodo} close={mockClose} />);

        fireEvent.change(screen.getByPlaceholderText('Введите название задачи'), { target: { value: 'task' } });
        fireEvent.change(screen.getByPlaceholderText('Введите описание задачи'), { target: { value: 'description' } });

        fireEvent.submit(screen.getByRole('form'));

        expect(mockAddTodo).toHaveBeenCalledWith('task', 'description');
        expect(mockClose).toHaveBeenCalled();
    });
});