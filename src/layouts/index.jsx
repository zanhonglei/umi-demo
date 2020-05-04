import React from 'react'
import { Layout, Menu ,Icon } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './index.css';
import { Link } from 'umi';
const { Header, Content, Footer, Sider } = Layout;
import menuList from './menu';
const SubMenu = Menu.SubMenu;

class Index extends React.Component {
    /*
  根据menu的数据数组生成对应的标签数组
  使用map() + 递归调用
  */
    getMenuNodes_map = (menuList) => {
      return menuList.map(item => {
        /*
          {
            title: '首页', // 菜单标题名称
            key: '/home', // 对应的path
            icon: 'home', // 图标名称
            children: [], // 可能有, 也可能没有
          }

          <Menu.Item key="/home">
            <Link to='/home'>
              <Icon type="pie-chart"/>
              <span>首页</span>
            </Link>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail"/>
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item/>
            <Menu.Item/>
          </SubMenu>
        */
        if(!item.children) {
          return (
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                {/*<Icon type={item.icon}/>*/}
                <BoldOutlined />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          )
        } else {
          return (
            <SubMenu
              key={item.key}
              title={
                <span>
                {/*<Icon type={item.icon}/>*/}
                  <BoldOutlined />
                <span>{item.title}</span>
              </span>
              }
            >
              {this.getMenuNodes(item.children)}
            </SubMenu>
          )
        }

      })
    }

    /*
    根据menu的数据数组生成对应的标签数组
    使用reduce() + 递归调用
    */
    getMenuNodes = (menuList) => {
      // 得到当前请求的路由路径
      const path = this.props.location.pathname

      return menuList.reduce((pre, item) => {

        // 如果当前用户有item对应的权限, 才需要显示对应的菜单项
        // if (this.hasAuth(item)) {


          // 向pre添加<Menu.Item>
          if(!item.children) {
            pre.push((
              <Menu.Item key={item.key}>
                <Link to={item.key} >
                  <Icon type={item.icon}/>
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
            ))
          } else {
            // 查找一个与当前请求路径匹配的子Item
            const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
            // 如果存在, 说明当前item的子列表需要打开
            if (cItem) {
              this.openKey = item.key
            }


            // 向pre添加<SubMenu>
            pre.push((
              <SubMenu
                key={item.key}
                title={
                  <span>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </span>
                }
              >
                {this.getMenuNodes(item.children)}
              </SubMenu>
            ))
          }
        // }

        return pre
      }, [])
    };

    /*
    在第一次render()之前执行一次
    为第一个render()准备数据(必须同步的)
     */
    componentWillMount () {
      this.menuNodes = this.getMenuNodes(menuList)
    }




    render(){
        return(
            <Layout>
                <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    left: 0,
                  }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" selectedKeys={[0]}>

                  {
                    this.menuNodes
                  }

                  {/*<Menu.Item key="1" icon={<UserOutlined />}>*/}
                  {/*  <Link to="/">*/}
                  {/*      <span style={{color:'#fff'}}>*/}
                  {/*          Go to list page*/}
                  {/*      </span>*/}
                  {/*  </Link>*/}
                  {/*</Menu.Item>*/}
                </Menu>
                </Sider>
                <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    { this.props.children }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    };
}
export default Index
