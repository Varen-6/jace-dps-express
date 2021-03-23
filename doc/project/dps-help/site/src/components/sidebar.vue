<template>
    <div class="sidebar">
        <div class="title">
            Documentation
        </div>
        <div class="menu-items">
            <router-link to="/" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Overview
                </div>
            </router-link>
            <router-link to="/bbn" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    BBN
                </div>
            </router-link>
            <router-link to="/collection" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Collection
                </div>
            </router-link>
            <router-link to="/context" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Context
                </div>
            </router-link>
            <router-link to="/csv" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    CSV
                </div>
            </router-link>
            <router-link to="/dps" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    DPS
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.title {
    color: rgb(14, 13, 13);
    font-size: 24px;
    margin-top: 20px;
    margin-right: 5px;
    margin-left: 5px;
}
.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 5px;
}
.menu-items > * {
    margin-top: 5px;
}
.side-btn {
    border: none;
    padding: 16px 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: black;
    background-color: transparent;
}
.side-btn:focus {
    outline: none;
}
.side-btn.active {
    position: relative;
    background-color: rgb(255, 246, 233);
    color: black;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 5px 0 0 5px;
}
.side-btn.active::before {
    top: 0px;
}
.side-btn.active::after {
    bottom: 0px;
}
.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: rgb(255, 246, 233);
}
.side-btn.active .link-container::before {
    top: -60px;
}
.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}
.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 0px;
    width: 60px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
}
</style>