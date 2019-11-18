<template>
  <div id="app">
    <div v-if="selected==='index'" class="container">
      XXXX
      <button @click=fetchSomeData()>fetchData</button>
    </div>
    <div v-else-if="selected==='data-table'" class="container">
      <button @click=indexPageOnclick()>Back</button>
      <b-table :data="message" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selected: 'index',
      message: [],
      columns: [{field: 'id', label: 'ID'},
                {field: 'title', label: 'Title',},
               ]
    }
  },
  components: {
  },
  methods:{
    indexPageOnclick() {
      this.selected = 'index'
    },
    fetchSomeData(){
      this.selected = 'data-table'
      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => this.message = json)
    }
  },
  created(){
  }
}
</script>
