import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";


export const UserLoginTemplate = (props) =>{

    const [{width,height},setSize] = useState({width:Math.round(window.innerWidth),height:Math.round(window.innerHeight)})

    useEffect(()=>{
        window.onresize = ()=>{
            setSize({
                width:Math.round(window.innerWidth),
                height:Math.round(window.innerHeight)
            })
        }
    })

    const { Sider, Content } = Layout;

    return (
         <>
            <Layout>
                <Sider width={width/2} style={{height:height,backgroundImage:`url(https://picsum.photos/${Math.round(width/2)}/${height})`, backgroundSize:'cover'}}>
                </Sider>
                <Content>
                    <main>
                        <Outlet/>
                    </main>
                </Content>
        </Layout>
        </>
    )
}