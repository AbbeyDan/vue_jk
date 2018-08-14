<template>
    <!-- 网站顶部导航 -->
    <div class="zd-head">
        <div class="head">
            <a href="" class="logo"><img src="../../../static/img/logo.png" alt=""></a>
            <el-menu  class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
                <el-submenu index="2" class="is-active">
                    <template slot="title"><router-link to="/zhiye">职业</router-link></template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                                <el-submenu index="3">
                    <template slot="title"><router-link to="/kecheng">课程</router-link></template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><router-link to="/qiye">企业</router-link></template>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                </el-submenu>
                                <el-submenu index="5">
                    <template slot="title"><router-link to="/shequ">社区</router-link></template>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
                </el-submenu>
            </el-menu>
            <div class="search">
                <input type="search" placeholder="搜索课程、问答或Wiki">
                <span class="el-icon-search"></span>
            </div>
            <div class="log-res">
                <span class="user-notlog">
                   <router-link to="/login" ><a>登录</a></router-link>
                    <i></i>
                   <router-link to=""><a>注册</a></router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import Bus from "vue"
export default {
  data() {
    return {
    //   activeIndex: "2",
    //   activeIndex2: "1",
    };
  },
  methods: {

  }
};
</script>
<style>
.head {
  width: 1000px;
  margin: 0 auto;
  height: 70px;
  line-height: 70px;
}
.head a.logo {
  display: block;
  width: 100px;
  height: 37px;
  float: left;
  margin-right:45px;
}
.head a.logo img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
 /* 选项卡 */
.el-menu-demo{
    float:left;
}
.el-menu--horizontal{
    border:none;
}
 /* 搜索框 */
 div.search{
   width: 230px;
    float: left;
    position: relative;
    margin-left: 40px;
    border: 1px solid #eee;
    height: 30px;
    margin-top: 20px;
 }
 .search input{
      border-right: 1px solid #eee;
    height: 30px;
    width: 200px;
    padding-left: 10px;
    float: left;
 }
.search span{
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
 .log-res{
     float:right;
 }
 .log-res a{
     display: inline-block;
     height: 70px;
     width: 40px;
     text-align: center;
 }
 .log-res i{
     height: 15px;
     border-left:1px solid #ccc;
 }
</style>

