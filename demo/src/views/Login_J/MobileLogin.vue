<template>
    <div class="Login_box">
        <Return></Return>
        <header>
            <img src="@/assets/img/22.png">
        </header>
        <!-- 登录内容 -->
        <div class="Login_main">
            <div class="number">
                <label for="number"><img src="@/assets/img/23.png"></label>
                <input id="number" type="text" placeholder="请输入手机号" v-model="number">
                <button v-show="!isdTime" class="huoqu" @click="huoqu()">获取验证码</button>
                <button v-show="isdTime" class="huoqu">{{dTime}}</button>
            </div>  
            <div class="verification">
                <label for="verification"><img src="@/assets/img/24.png"></label>
                <input id="verification" type="text" placeholder="请输入验证码" v-model="verification">
            </div>
        </div>
        <!-- 登录按钮 -->
        <div class="Loginbtn">
            <button @click="Login()">登录</button>
            <!-- 注册选项 -->
            <div class="yzOpthis">
                <span @click="FindPassLogin()">找回密码</span>
                <span @click="RegisterLogin()">密码登录</span>
            </div>
        </div>
        
        <!-- 其他登录方式 -->
        <p class="huocong">或从以下方式登录</p>
        <div class="elseLogin">
            <div @click="WXLogin()">
                <img src="@/assets/img/25.png">
                <span>微信登录</span>
            </div>
            <div @click="WXLogin()">
                <img src="@/assets/img/26.png">
                <span>QQ登录</span>
            </div>
        </div>

    </div> 
</template>
<script>
import Return from '@/components/return'
import { verificationLogin } from '@/utils/api'
import { Toast } from 'vant';
export default {
    data() {
        return {
            number:'',
            verification:'',
            dTime:59,
            isdTime:false
        }
    },
    methods: {
        // 获取验证码倒计时
        huoqu(){
            this.isdTime = true;
            this.verification = '6666666666'
                let yzmdj =  setInterval(() => {
                    if(this.dTime <= 0){
                        this.dTime = 59
                        this.isdTime = false
                        clearInterval(yzmdj)
                    }else{
                        this.dTime--
                    }               
                },1000);            
        },
        // 验证码登录
        Login(){
            verificationLogin({
                mobile:Number(this.number),
                sms_type:'1433223'
            }).then((res)=>{
                if(res.code != 200){
                    this.verification = ''
                    Toast.fail(res.msg);                  
                }else{
                    Toast.success('登录成功');
                    // this.$store.commit('mobileLogin',{token:res.data.remember_token,name:res.data.nickname})
                    // this.$router.push({path:'/Home'})
                }              
            })
        },
        // 跳转微信登录
        WXLogin(){
            Toast.fail('还未取得合作');
        },
        // 跳转找回密码
        FindPassLogin(){
            this.$router.push({path:'/Register'})
        },
        // 跳转至密码登录
        RegisterLogin(){
            this.$router.push({path:'/Login'})
        }
    },
    components:{
        Return
    }
}
</script>
<style lang="scss" scoped>
    .Login_box{
        width: 100%;
        height: 100%;    
    }
    header{
        width: 100%;
        height: 2.5rem;
        // background-color: blueviolet;
        margin-top: .6rem;
        img{
            width: 100%;
            height: auto;
        }
    }
    // 登录内容
    .Login_main{
        width: 100%;
        padding: .2rem;
        display: flex;
        flex-direction: column;
        font-size: .25rem;
        div{
            width: 100%;
            height: 1.4rem;
            // background-color: chartreuse;
            margin: .2rem 0;
            display: flex;
            align-items: center;
            padding:  0 0 0 .2rem;
            border-bottom: 1px solid rgb(231, 231, 231);
            input{
                width: 4.5rem;
                height: 1rem;
                border: none;
                background-color: #ffffff;
            }
            button{
                padding: .1rem;
                font-size: .2rem;
                color: #ffffff;
                background-color:#EB6100 ;
                border: none;
                border-radius: 5px;
                margin:0 0 .4rem .2rem;
            }
            label{
                width: .7rem;
                height: 1rem;
                background-color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width: .7rem;
                    height: .8rem;
                    display: block;
                }
            }
        }
        .number{
            display: flex;
            
        }
    }
    // 登录按钮
    .Loginbtn{
        width: 100%;
        padding: .2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: .34rem;
        button{
            width: 80%;
            height: 1rem;
            font-weight: 500;
            color: #ffffff;
            background-color: #EB6100;
            border: none;
            border-radius: 10px;
        }
        div{
            width: 80%;
            margin: .2rem 0 0 0;
            display: flex;
            justify-content: space-between;
            font-size: .22rem;
            font-weight: 500;
            span{
                color: #BDBDBD;
            }
        }
    }
    .huocong{
        margin-top: 1rem;
        font-size: .25rem;
        text-align: center;
        color: #BDBDBD;
    }
    // 其他登录方式
    .elseLogin{
        width: 100%;
        font-size: .2rem;
        display: flex;
        padding: .2rem;
        justify-content: center;
        div{
            display: flex;
            padding: .2rem .7rem;
            flex-direction: column;
            align-items: center;
            color: #BDBDBD;
            img{
                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>