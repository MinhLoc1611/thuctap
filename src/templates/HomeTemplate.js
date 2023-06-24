import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd';
import HeaderHome from '../components/HeaderHome';
import SideBar from '../components/SideBar';

const { Header, Sider, Content } = Layout;



export default function HomeTemplate() {
    let [menu,setMenu] = useState(true);

    const headerStyle = {
        height: '60px',
        backgroundColor: '#fff',
        borderColor: '#fff',
        position:'fixed',
        zIndex:10,
        left:0,
        right:0,
        paddingInline:0,
    };
    const contentStyle = {
        padding: '60px 0px 50px 240px',
        backgroundColor: 'rgb(252, 237, 218)',
    };
    
    const siderStyle = {
        height: '100vh',
        maxHeight: 'calc(100% - 60px)',
        position: 'fixed',
        top: '60px',
        backgroundColor: '#fff',
        overflow:'hidden',
        transform:'translateX(0)'
    };

    const contentStyleMenuOff = {
        padding: '60px 0px 50px 0px',
        backgroundColor: 'rgb(252, 237, 218)',
    };
    
    const siderStyleMenuOff = {
        height: '100vh',
        maxHeight: 'calc(100% - 60px)',
        position: 'fixed',
        top: '60px',
        backgroundColor: '#fff',
        overflow:'hidden',
        transform:'translateX(-100%)'
    };

    const handleMenu = ()=>{
        setMenu(!menu)
    }

    

    return (
        <Layout>
            <Header style={headerStyle}><HeaderHome handleMenu={handleMenu} /></Header>
            <Layout hasSider>
                {menu ? <>
                    <Sider width={240} className='Side-bar' style={siderStyle}><SideBar /></Sider>
                <Content style={contentStyle}>
                    <main>
                        <Outlet />
                    </main>
                </Content>
                </>
                : <>
                <Sider width={240} className='Side-bar' style={siderStyleMenuOff}><SideBar /></Sider>
                <Content style={contentStyleMenuOff}>
                    <main>
                        <Outlet />
                    </main>
                </Content>
                </>}
            </Layout>
        </Layout>
    )
}
