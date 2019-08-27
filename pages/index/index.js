//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgurl:[
      "/img/cat1.JPG",
      "/img/cat2.JPG",
      "/img/cat3.JPG"
    ],
    indic:true,
    autoplay:true,
    interval:5000,
    duration:1000,
    prolist:[
      {
        logo: '/img/mantou.JPG',
        title:'馒头',
        desc:'短腿猫又名曼赤肯猫，善于攀爬,跳跃和奔跑橘猫（Felis silvestris catus）是家猫常见的一种毛色，也叫。'
      },
      {
        logo: '/img/huli.JPG',
        title: '狐狸',
        desc: '布偶猫，又称“布拉多尔（Ragdoll）”，发源于美国，是一种杂交品种宠物猫橘猫（Felis silvestris catus）是家猫。。'
      },
      {
        logo: '/img/panghu.JPG',
        title: '胖虎',
        desc: '橘猫（Felis silvestris catus）是家猫常见的一种毛色，也叫橘子猫，桔猫。'
      }
    ]
  },
  onLoad: function(){

  },
  detailbtn:function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index);
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,
    })
  },
  onShareAppMessage:function(){
    return{
      title:"薛定谔的猫",
      desc:"这是一个吸猫平台",
      path:"/pages/index/index"
    }
  }
})
