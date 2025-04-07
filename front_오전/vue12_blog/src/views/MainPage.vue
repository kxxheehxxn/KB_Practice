<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref([])

const fetchData = async () => {
  try {
    const apiURL =
      'https://apis.data.go.kr/1543061/abandonmentPublicService_v2/abandonmentPublic_v2'
    const params = {
      serviceKey:
        'uzVV/ZxdGeT24NnP6EkvACy8CdXrKcF66Dtd79d4T104hPNeMUT/2Dn66VhD66vQLNkfZEIRSLFCX9YsRHkL/g==',
      pageNo: 1,
      numOfRows: 10,
      _type: 'json',
    }

    const res = await axios.get(apiURL, { params })
    data.value = res.data.response.body.items.item // 실제 데이터 저장
  } catch (error) {
    console.error('데이터 불러오기 실패:', error)
  }
}

onMounted(fetchData)
</script>

<template>
  <section class="container mainpage">
    <h2>메인 페이지</h2>
    <ul v-if="data.length">
      <li v-for="(item, index) in data" :key="index">
        {{ item.kindCd }} - {{ item.age }}
      </li>
    </ul>
    <p v-else>데이터를 불러오는 중...</p>
  </section>
</template>
