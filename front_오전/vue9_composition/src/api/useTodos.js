import axios from 'axios';
import { ref } from 'vue';

const API_URL = 'http://localhost:5001/todos';

export const useTodos = () => {
  const todos = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // 데이터 가져오기
  const fetchTodos = async () => {
    loading.value = true;
    error.value = null;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.get(`${API_URL}`);
      todos.value = response.data;
    } catch (err) {
      error.value = err.message || '데이터 요청 중 에러';
    } finally {
      loading.value = false;
    }
  };

  // 데이터 추가
  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post(`${API_URL}`, newTodo);
      todos.value.push(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // todo 항목 업데이트
  const updateTodo = async (updatedTodo) => {
    try {
      const response = await axios.put(
        `${API_URL}/${updatedTodo.id}`,
        updatedTodo
      );
      const index = todos.value.findIndex((todo) => todo.id === updatedTodo.id);
      // 일치하는 값이 하나도 없으면 반환값이 -1
      if (index === -1) return;
      todos.value[index] = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  // 데이터 삭제
  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(`${API_URL}/${todoId}`);
      todos.value = todos.value.filter((todo) => todo.id !== todoId);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  //일괄 삭제함수
  const deleteAllTodos = async () => {
    try {
      const completedTodos = todos.value.filter((todo) => todo.completed);
      const deletePromises = completedTodos.map((todo) =>
        axios.delete(`${API_URL}/${todo.id}`)
      );
      await Promise.all(deletePromises);
      todos.value = todos.value.filter((todo) => !todo.completed);
    } catch (err) {
      console.log(err);
    }
  };

  return { todos, loading, error, fetchTodos, addTodo, updateTodo, deleteTodo };
};
