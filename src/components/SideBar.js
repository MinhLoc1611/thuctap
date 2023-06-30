import React from 'react'
import { Menu } from "antd";
import { NavLink } from 'react-router-dom';

export default function SideBar() {
    

    return (
        <Menu
            style={{
                width: 240,
            }}
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1',
                    label: (
                        <div className='side-bar-item' >
                            <span><i className="fa fa-home"></i></span>
                            <span className='ms-3'>Bảng tin</span>
                        </div>
                    )
                },
                {
                    key: '2',
                    label: (
                        <div className='side-bar-item' >
                            <span><i className="fa fa-user-circle"></i></span>
                            <span className='ms-3'>Thông tin cá nhân</span>
                        </div>
                    )
                },
                {
                    key: 'sub1',
                    label: (
                        <div className='side-bar-item'>
                            <span><i className="fa fa-user"></i></span>
                            <span className='ms-3'>Học viên</span>
                        </div>
                    ),
                    children: [
                        {
                            key: '3',
                            label: (
                                <div className='side-bar-item'>
                                    <span><i className="fas fa-pen"></i></span>
                                    <span className='ms-3'>Điểm danh</span>
                                </div>
                            )
                        },
                        {
                            key: '4',
                            label: (
                                <div className='side-bar-item'>
                                    <span><i className="fas fa-pen"></i></span>
                                    <span className='ms-3'>Khoá học của tôi</span>
                                </div>
                            )
                        }
                    ]
                },
                {
                    key: 'sub2',
                    label: (
                        <div className='side-bar-item'>
                            <span><i className="fa fa-user-tie"></i></span>
                            <span className='ms-3'>Trợ giảng</span>
                        </div>
                    ),
                    children: [
                        {
                            key: '5',
                            label: (
                                <div className='side-bar-item'>
                                    <span><i className="fa fa-user-tag"></i></span>
                                    <span className='ms-3'>Học viên của tôi</span>
                                </div>
                            )
                        },
                        {
                            key: '6',
                            label: (
                                <NavLink className='side-bar-item' to='/phattu'>
                                    <span><i className="fa fa-users-cog"></i></span>
                                    <span className='ms-3'>Giám sát học tập</span>
                                </NavLink>
                            )
                        },
                        {
                            key: '7',
                            label: (
                                <NavLink className='side-bar-item' to='/daotrang'>
                                    <span><i className="fas fa-yin-yang"></i></span>
                                    <span className='ms-3'>Đạo tràng</span>
                                </NavLink>
                            )
                        }
                    ]
                },
                {
                    key: 'sub3',
                    label: (
                        <div className='side-bar-item'>
                            <span><i className="fa fa-list"></i></span>
                            <span className='ms-3'>Test Online</span>
                        </div>
                    ),
                    children: [
                        {
                            key: '8',
                            label: (
                                <div className='side-bar-item'>
                                    <span><i className="fas fa-pen"></i></span>
                                    <span className='ms-3'>Thư viện đề thi</span>
                                </div>
                            )
                        }
                    ]
                },
                {
                    key: 'sub4',
                    label: (
                        <div className='side-bar-item'>
                            <span><i className="far fa-calendar-check"></i></span>
                            <span className='ms-3'>Công việc</span>
                        </div>
                    ),
                    children: [
                        {
                            key: '9',
                            label: (
                                <div className='side-bar-item'>
                                    <span className='ms-3'>Nhóm việc của tôi</span>
                                </div>
                            )
                        }
                    ]
                },
            ]}
        />


    )
}

