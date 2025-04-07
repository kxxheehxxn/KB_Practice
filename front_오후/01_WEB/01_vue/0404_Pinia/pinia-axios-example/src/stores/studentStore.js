import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import apiClient from '@/utils/axios';

export const useStudentStore = defineStore('studentStore', () => {
  // state
  const students = ref([]);

  //action
  const fetchStudents = async () => {
    try {
      const response = await apiClient.get('/students');
      students.value = response.data;
    } catch (err) {
      console.log('학생 정보 로딩 에러 :', err);
    }
  };
  //Getter
  const studentCount = computed(() => students.value.length);

  return { students, fetchStudents, studentCount };
});
