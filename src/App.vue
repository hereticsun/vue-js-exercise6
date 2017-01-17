<template>
    <div class="container">
        <app-header></app-header>
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
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ServerList from './components/pages/page-servers/page-servers-serverlist.vue';
    import ServerDetails from './components/pages/page-servers/page-servers-serverdetails.vue';

    export default {
        components: {
            'server-list': ServerList,
            'server-details': ServerDetails
        }
    }
</script>

<style>
</style>
