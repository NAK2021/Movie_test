import { useState, useEffect } from 'react';
import axios from 'axios';


const API_URL = 'http://localhost:3000/tasks';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingText, setEditingText] = useState('');

    // Fetch tasks
    useEffect(() => {
        axios.get(API_URL)
            .then(res => setTasks(res.data))
            .catch(err => console.error('Error fetching tasks:', err));
    }, []);

    // Add a new task
    const addTask = () => {
        if (!newTask.trim()) return;

        axios.post(API_URL, { title: newTask })
            .then(res => setTasks([...tasks, res.data]))
            .catch(err => console.error('Error adding task:', err));

        setNewTask('');
        
    };

    // Delete a task
    const deleteTask = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(() => setTasks(tasks.filter(task => task._id !== id)))
            .catch(err => console.error('Error deleting task:', err));
    };

    // Enable edit mode
    const startEditing = (id, title) => {
        setEditingTaskId(id);
        setEditingText(title);
    };

    // Save updated task title
    const updateTask = (id) => {
        if (!editingText.trim()) return;
    
        console.log(`Sending update request: ID: ${id}, New Title: ${editingText}`);
    
        axios.put(`${API_URL}/${id}`, { title: editingText })
            .then(res => {
                console.log('🔄 Updated Task:', res.data); 
                setTasks(tasks.map(task => task._id === id ? res.data : task));
                setEditingTaskId(null);
            })
            .catch(err => console.error('Error updating task:', err));
    };
    

    return (
        <div className="container mt-4" style={{height:1024}}>
            <h2 className="text-center mb-3">To-Do List</h2>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task" 
                />
                <button onClick={addTask} className="btn btn-success">Add</button>
            </div>
            <ul className="list-group">
                {tasks.map(task => (
                    <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {editingTaskId === task._id ? (
                            <input 
                                type="text" 
                                className="form-control"
                                value={editingText} 
                                onChange={(e) => setEditingText(e.target.value)}
                                onBlur={() => updateTask(task._id)}
                                onKeyDown={(e) => e.key === 'Enter' && updateTask(task._id)}
                                autoFocus
                            />
                        ) : (
                            <span className="flex-grow-1">
                                {task.title}
                            </span>
                        )}
                        <div className="btn-group">
                            <button className="btn btn-sm btn-primary me-2 rounded" onClick={() => startEditing(task._id, task.title)}>Edit</button>
                            <button className="btn btn-sm btn-danger me-2 rounded" onClick={() => deleteTask(task._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;