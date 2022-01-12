<template>
    <b-col lg="12">
        <b-tree-view :data="data"></b-tree-view>
    </b-col>
</template>
<script>
export default {
    name: 'Tree',
    components:{
    },
    props: {
        data: Object,
    },
    mounted() {
        console.log(this.data);
    }
}
</script>