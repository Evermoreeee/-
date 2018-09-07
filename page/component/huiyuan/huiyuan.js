// page/component/huiyuan/huiyuan.js
Page({
  data:{
    obIndex: 0,
  },
  checkitem(e) {
    console.log('123')
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      obIndex: index,
    })
    
  }
 
})