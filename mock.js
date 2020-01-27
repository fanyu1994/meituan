/* eslint-disable no-unused-vars */
const Mock = require("mockjs")
const Random = Mock.Random
const produceNewsData = function(){
    let articles = [];
    for(let i = 0;i < 1000;i++){
        let newArticleObject = {
            name:Random.cname(),//店名
            img:Random.image('200x200','#4A7BF7','美食'),//图片
            minutes:Random.integer(1,100),//分钟
            length:Random.float(0,20,0,1),//路程
            price:Random.integer(1,100),//价格
            startPrice:Random.integer(0,20),//起送价格
            givePrice:Random.integer(0,5),//配送价格
            grade:Random.float(0,5,0,1),//评分
            month:Random.integer(1,1000)//月销售额
        }
        articles.push(newArticleObject)
    }
    return  {
        articles: articles
    }
}

Mock.mock('/data/index','post',produceNewsData);