import React from 'react'
import './style.scss'
import logo from '../../libs/img/logo.png'
import { Button, Input } from 'antd'

const { Search } = Input;

class Header extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <img className="nav logo" src={logo} alt=""/>
        <Button type="text">首页</Button>
        <Button type="text">下载APP</Button>
        <Search
          placeholder="搜索"
          onSearch={value => console.log(value)}
          style={{ width: 200, marginLeft: 15 }}
        />
        <span className="nav right">
          <Button type="text">登录</Button>
          <Button shape="round" danger >注册</Button>
        </span>
      </div>
    )
  }
}

export default Header