<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">{{ this.$store.state.title }}</span>
            </div>
            <el-form :model="loginUser" @keyup.enter.native="submitForm('loginForm')" status-icon :rules="rules" ref="loginForm" class="loginForm" label-width="80px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginUser.username" placeholder="请输入用户名" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" autocomplete="new-password" v-model="loginUser.password" placeholder="请输入密码" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { loginApi } from '@/api/login'

@Component({})
// 这里写业务逻辑相关的东西
export default class Login extends Vue {
    loginUser: any = {
        username: "admin",
        password: "admin"
    }

    rules: any = {
        username: [
            { required: true, message: "用户名不能为空", trigger: "blur" },
            { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        password: [
            { required: true, message: "密码不能为空", trigger: "blur" },
            { min: 5, message: "长度不小于 5 个字符", trigger: "blur" }
        ]
    }

    // 提交表单
    /* submitForm(formName) {
        this.$refs[formName].validate(valid => {
            if (valid) {
                // 登陆状态记录
                // localStorage.setItem('code', this.md5((0).toString()));

                loginApi().then(res=> {
                    let { status } = res
                    
                    if(status === 200) {
                        this.$message.success("登陆成功");

                        this.$router.push("/index");
                    } else {
                        this.$message.warning("登陆失败");
                    }
                })
            } else {
                this.$message.error("表单填写错误");
            }
        });
    } */
}
</script>

<style lang="less" scoped>
@fontColor: #fff;

.login {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/images/bg.jpg) no-repeat center center;
    background-size: 100% 100%;

    .form_container {
        position: absolute;
        top: 20%;
        left: 34%;
        width: 370px;
        padding: 25px;
        text-align: center;
        border-radius: 5px;
    }

    .manage_tip {
        .title {
            font-weight: bold;
            font-size: 26px;
            color: @fontColor;
        }
    }

    .loginForm {
        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 10px #cccc;

        .submit_btn {
            width: 100%;
        }
    }
}
</style>