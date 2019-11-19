<template>
  <div id="app">
    <div v-if="selected==='index'" class="container">
<!--       <b-field label="Select datetime">
        <b-datetimepicker
            placeholder="Type or select a date..."
            icon="calendar-today"
            editable>
        </b-datetimepicker>
      </b-field> -->
      <button @click=fetchSomeData()>fetchData</button>
    </div>
    <div v-else-if="selected==='data-table'" class="container">
      <b-button type="is-dark" size="is-small" @click=indexPageOnclick()>Back</b-button>
      <b-table :data="message" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      datetime: new Date(),
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
    getMessageDatacallback(resp) {
      console.log(resp)
      this.message = resp
    },
    fetchSomeData(){
      this.selected = 'data-table'
      getDataAsync('http://localhost:3000/posts')
      .then(this.getMessageDatacallback);
    }
  },
  created(){
  }
}

async function getDataAsync(url)
{
  let response = await fetch(url);
  let data = await response.json()
  return data;
}

</script>
