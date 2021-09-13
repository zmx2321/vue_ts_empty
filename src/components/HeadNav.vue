<template>
    <section class="header_nav f-oh">
        <el-row class="header_nav f-cb">
            <el-col class="header_left f-oh">
                <el-row>
                    <el-col :span="4" class="logo f-oh">
                        <img src="../assets/logo.png" alt="">
                    </el-col>
                    <el-col :span="18" class="title f-oh">
                        <!-- <span>{{ this.$store.state.title }}</span> -->
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="header_right f-oh">
                <el-row el-row type="flex">
                    <el-col :span="8" class="avatar f-oh">
                        <img src="../assets/images/portrait.png" alt="">
                    </el-col>
                    <el-col :span="11" class="welcome f-oh">
                        <span>欢迎使用</span>
                    </el-col>
                    <!-- <el-col :span="4" class="title f-oh">
                        <el-dropdown trigger="click" @command='setDialogInfo'>
                            <span class="el-dropdown-link f-csp">
                                <i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command='modify_password'>修改密码</el-dropdown-item>
                                <el-dropdown-item command='logout'>注销</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col> -->
                </el-row>
            </el-col>
        </el-row>

        <!-- 修改密码 -->
        <!-- <el-dialog title="修改密码" @keyup.enter.native="submitForm('modifyForm')" :close-on-click-modal="false" :visible.sync="modifyUserVisible" :before-close="handleClose">
            <el-form :model="modifyUser" @keyup.enter.native="submitForm('modifyForm')" status-icon :rules="rules" ref="modifyForm" class="loginForm" label-width="100px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="modifyUser.username"  placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="password">
                    <el-input v-model="modifyUser.password" placeholder="请输入新密码" type="password" clearable></el-input>
                </el-form-item>
                <el-form-item label="重复新密码" prop="newPwd2">
                    <el-input v-model="modifyUser.newPwd2" placeholder="请输入新密码" type="password" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('modifyForm')" class="submit_btn">修改密码</el-button>
                    <el-button @click="resetForm('modifyForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog> -->
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HeadNav extends Vue {
    // title: String = title
}
</script>

<style lang="less" scoped>
@fontColor: #fff;

/* header_nav */
.header_nav{
    min-width: 390px;
    height: 100%;

    span {
        color: @fontColor;
    }

    .title span{
        display: block;
        height: 55px;
        line-height: 55px;
    }

    /* header_left */
    .header_left {
        width: 250px;

        .logo{
            margin: 0 8px 0 10px;

            img{
                height: 40px;
                width: 40px;
                margin-top: 10px;
            }
        }
    }

    /* header_left */
    .header_right {
        width: initial;
        min-width: 140px;
        float: right;

        .avatar img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-top: 10px;
        }

        .welcome span{
            display: block;
            height: 55px;
            line-height: 55px;
        }
    }
}
</style>
