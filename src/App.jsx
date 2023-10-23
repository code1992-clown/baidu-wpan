/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import './App.css';
import serarchImg from './imgs/search.png'
import img from './imgs/image.png'
import scan from './imgs/scan.png'
import page from './imgs/page.png'
import { Divider, Spin, message } from 'antd';

const App = () => {
  const [load, setLoad] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const handleClick = () => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
      messageApi.open({
        type: 'error',
        content: '跳转失败,请稍后重试！',
      });
    }, 5000)
  }
  return <div className='container'>
    {contextHolder}
    <Spin spinning={load} size="large" tip={<div>疯狂加载中......</div>}>
      <div className='head'>会员兑换教程</div>
      <div className='head-1 red'>百度网盘，QQ音乐， 小猿搜题会员等（<span style={{ color: 'black' }}>任选其一</span>） 请严格按照如下流程领取</div>
      <div>第一步：先下载<span className='red'>快手极速版APP</span>并<span className='red'>登录</span>（应用商店下载或扫活动二维码下载）</div>
      <div className='img img-small'>
        <img src={serarchImg} alt="" />
      </div>
      <Divider />
      <div>第二步：然后用快手极速版APP扫一扫下方<span className='red'>活动二维码</span>，返回主页<span className='red'>刷一分钟视频</span>就会弹出1分购活动页面</div>
      <div className='img img-small' style={{}}>
        <img src={scan} alt="" />
      </div>
      <Divider />
      <div>第三步：在活动页面选择想要的礼品，<span className='red'>任选其一</span>；然后根据提示输入要充值的账号（<span className='red'>手机号</span>），一分下单立马到账</div>
      <div className='img img-small'>
        <img src={img} alt="" />
        <div style={{ lineHeight: 1.2 }}>打开快手极速版APP扫这个活动二维码</div>
        <div style={{ lineHeight: 1.2 }}>(截图保存)</div>
      </div>
      <Divider />
      <div>第四步：<span className='red'>扫了活动二维码后， 记得回到主页看一分钟视频</span>，即可弹出活动入口 (下图展示活动部分页面)</div>
      <div className='img img-small'>
        <img src={page} alt="" />
      </div>
      <Divider />
      <div> <span className='red'>温馨提示</span>： 如果当天没弹出活动页面，需要<span className='red'>第二天（晚上12点过后就可以）</span>去<span className='red'>APP观看1分钟视频</span>，即可弹出活动页面，切记！（<span className='red'>系统核实用户真实性</span>）</div>
      <Divider />
      <div>没弹出活动页面可填写下方工单（人工直接充值）</div>
      <div onClick={handleClick} style={{ color: "skyblue", cursor: 'pointer' }}>→ → 人工客服充值（ 点我提交）← ←</div>
      <div>如显示“访问受限”点击下方“刷新表单”即可</div>
      <Divider />
      <div className='tip'>
        个别用户扫码未出现虚拟礼品的情况，快手相关负责人答复是因对特殊地区礼品配置资源不同导致的。这种情况可以填写工单人工充值
      </div>
    </Spin>
  </div>
}

export default App;
