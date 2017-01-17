<template>
    <div class="container">
        <page-header></page-header>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <server-list></server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
                <server-details></server-details>
            </div>
        </div>
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import ServerList from './components/ServerList.vue';
    import ServerDetails from './components/ServerDetails.vue';

    export default {
        components: {
            'server-list': ServerList,
            'server-details': ServerDetails
        }
    }
</script>

<style>

</style>
