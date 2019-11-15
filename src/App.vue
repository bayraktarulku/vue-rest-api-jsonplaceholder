<template>
  <div id="app">
    <div class="container">
      <b-table :data="message" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: [],
      columns: [{field: 'id', label: 'ID'},
        {field: 'title', label: 'Title',},
      ]
    }
  },
  components: {
  },
  methods:{
    fetchSomeData(){
      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => this.message = json)
    }
  },
  created(){
    this.fetchSomeData()
  }
}
</script>
