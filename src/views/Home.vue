<template>
  <div class="home">
    <h3>Tree Sort</h3>
    <b-container>
      <div class="list">
        <Tree v-bind:data="getTree" />
      </div>
    </b-container>
  </div>
</template>

<script>
import Tree from '@/components/tree/Tree.vue'
export default {
  name: 'Home',
  components: {
    Tree
  },
  data: function(){
      return{
          branchs: [],
          tree: []
      }
  },

  computed: {
      getTree() {
        this.sort()
        let aux = this.tree
        this.branchs.map(parent => {
          if(parseInt(parent.Parent) == 0)
          {
            aux.push({id:parent.ID,name:parent.Name,children:[]})
          }else{
            if(aux.length > 0)
            {
                let index = aux.findIndex(item => item.id == parent.Parent)
                if(index >= 0)
                {
                  aux[index].children.push({id:parent.ID,name:parent.Name,children:[]})
                }else{
                  aux.forEach((element,indexChild) => {
                    let indexsubchild = element.children.findIndex(item => item.id == parent.Parent)
                    if(indexsubchild >= 0)
                    {
                      aux[indexChild].children[indexsubchild].children.push({id:parent.ID,name:parent.Name})
                    }
                  });
                }
            }
          }
        })
        this.tree == aux
        aux = []
        return this.tree
      }

  },
  methods: {
     sort: function() {
       this.branchs.sort(function(a, b) {
          if (a.Parent > b.Parent) {
            return 1;
          }
          if (a.Parent < b.Parent) {
            return -1;
          }
          return 0;
        });
     }
  },
  mounted(){
      fetch('https://test.defontana.com/')
        .then(res => {
          return res.json()
        })
        .then(data => {
          this.branchs = data.data
        })
        .catch( err => {
          console.log(err);
        })
  }

}
</script>
