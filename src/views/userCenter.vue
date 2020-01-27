<template>
<!-- 用户中心 -->
    <div class="userCenter">
        <div class="top">
            <div class="tou">
                <img src="user/touxiang.png" alt="">
                <span class="name">飞翔的山鸡</span>
            </div>
            <div class="you">
                <img src="user/sz.png" alt="" class="sz">
                <img src="user/ej.png" alt="" class="ej">
            </div>
            <div class="wei">
                <div class="sc">
                    <img src="user/sc.png" alt="">
                    <span>收藏</span>
                </div>
                <div class="pj">
                    <img src="user/pj.png" alt="">
                    <span>评价</span>
                </div>
                <div class="hb">
                    <img src="user/hb.png" alt="">
                    <span>红包/卡卷</span>
                </div>
                <div class="xx">
                    <img src="user/xx.png" alt="">
                    <span>消息</span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom_top">
                <div class="bottom_top_top">
                    <span class="my_wallet">我的钱包</span>
                    <span class="go_wallet">进入钱包</span>
                    <img src="user/you.png" alt="">
                </div>
                <div class="bottom_top_bottom">
                    <div class="jieqian">
                        <span>20</span><span>万</span>
                        <span>借钱</span>
                        <span>最高额度（元）</span>
                    </div>
                    <div class="zhangdan">
                        <span>12</span><span>月</span>
                        <span>我的账单</span>
                        <span>查看消费记录</span>
                    </div>
                    <div class="youhui">
                        <span>165</span><span>元</span>
                        <span>美食享优惠</span>
                        <span>最高随机减</span>
                    </div>
                </div>
            </div>
            <div class="bottom_middle">
                <my-img></my-img>
            </div>
            <div class="bottom_bottom">
                <div class="bottom_bottom_top">推荐工具</div>
                <div class="bottom_bottom_bottom">
                    <div><img src="user/lw.png" alt=""><span>邀请有礼</span></div>
                    <div><img src="user/cz.png" alt=""><span>手机充值</span></div>
                    <div><img src="user/hc.png" alt=""><span>火车机票</span></div>
                    <div><img src="user/ds.png" alt=""><span>袋鼠快跑</span></div>
                    <div><img src="user/s.png" alt=""><span>个税计算</span></div>
                    <div><img src="user/mj.png" alt=""><span>墨迹天气</span></div>
                    <div><img src="user/sg.png" alt=""><span>免费水果</span></div>
                    <div><img src="user/hy.png" alt=""><span>会员中心</span></div>
                    <div><img src="user/gy.png" alt=""><span>美团公益</span></div>
                    <div><img src="user/ml.png" alt=""><span>免流美团</span></div>
                    <div><img src="user/fp.png" alt=""><span>发票助手</span></div>
                    <div><img src="user/dx.png" alt=""><span>美团大学</span></div>
                    <div><img src="user/hz.png" alt=""><span>我要合作</span></div>
                    <div><img src="user/sf.png" alt=""><span>闪电支付</span></div>
                    <div><img src="user/m.png" alt=""><span>关于美团</span></div>
                    <div><img src="" alt=""><span></span></div>
                </div>
            </div>
        </div>
        <foot ref="foot"></foot>
    </div>
</template>
<script>
import foot from '../components/footer.vue'
import myImg from '../components/myImg.vue'

export default {
    data(){
        return {}
    },
    components:{
        foot,
        myImg
    },
    mounted(){
        this.$refs.foot.src5=false;
        this.$refs.foot.src6=true;
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.$refs.foot.shouye()
        })
    }
}
</script>

<style lang="stylus" scoped>
@import '../css/userCenter'
</style>