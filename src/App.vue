<template>
  <div id="app">
    <div class="container">
    <b-table :data="message" focusable>
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>{{ props.row.id }}</b-table-column>
        <b-table-column field="title" label="Title">{{ props.row.title }}</b-table-column>
        <b-table-column field="body" label="Body">{{ props.row.body }}</b-table-column>
      </template>
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: []
    }
  },
  components: {
  },
  methods:{
    fetchSomeData(){
      fetch('https://jsonplaceholder.typicode.com/posts', {
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
