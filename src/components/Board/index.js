import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Container } from './styles';
import List from '../List';

export default function Board() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const { data } = await api.get('/tarefas');

      setTasks(data);
    }

    loadTasks();
  }, []);

  return (
    <Container>
      {tasks.map(task => (
        <List key={task.title} data={task} />
      ))}
    </Container>
  );
}
