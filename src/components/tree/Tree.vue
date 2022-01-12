<template>
    <div>
        <b-col lg="12">
            <b-tree-view :data="data"></b-tree-view>
        </b-col>
    </div>
</template>
<script>
export default {
    name: 'Tree',
    props: {
        data: Object,
    }
}
</script>