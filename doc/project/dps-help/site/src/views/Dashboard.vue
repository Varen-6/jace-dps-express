<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
    name: 'home',
    components: {
        Sidebar
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color:white;
    height: 100vh;
    width: 100vw;
}
.content {
    background-color:rgb(255, 246, 233);
    border-radius: 0px;
    margin: 0px 0px 0px 0px;
}
</style>