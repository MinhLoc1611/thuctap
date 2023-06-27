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
                        <a className='side-bar-item' href>
                            <span><i className="fa fa-home"></i></span>
                            <span className='ms-3'>Bảng tin</span>
                        </a>
                    )
                },
                {
                    key: '2',
                    label: (
                        <a className='side-bar-item' href>
                            <span><i className="fa fa-user-circle"></i></span>
                            <span className='ms-3'>Thông tin cá nhân</span>
                        </a>
                    )
                },
                {
                    key: 'sub1',
                    label: (
                        <li className='side-bar-item'>
                            <span><i className="fa fa-user"></i></span>
                            <span className='ms-3'>Học viên</span>
                        </li>
                    ),
                    children: [
                        {
                            key: '3',
                            label: (
                                <a className='side-bar-item' href>
                                    <span><i className="fas fa-pen"></i></span>
                                    <span className='ms-3'>Điểm danh</span>
                                </a>
                            )
                        },
                        {
                            key: '4',
                            label: (
                                <a className='side-bar-item' href>
                                    <span><i className="fas fa-pen"></i></span>
                                    <span className='ms-3'>Khoá học của tôi</span>
                                </a>
                            )
                        }
                    ]
                },
                {
                    key: 'sub2',
                    label: (
                        <li className='side-bar-item'>
                            <span><i className="fa fa-user-tie"></i></span>
                            <span className='ms-3'>Trợ giảng</span>
                        </li>
                    ),
                    children: [
                        {
                            key: '5',
                            label: (
                                <a className='side-bar-item' href>
                                    <span><i className="fa fa-user-tag"></i></span>
                                    <span className='ms-3'>Học viên của tôi</span>
                                </a>
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
                        <li className='side-bar-item'>
                            <span><i className="fa fa-list"></i></span>
                            <span className='ms-3'>Test Online</span>
                        </li>
                    ),
                    children: [
                        {
                            key: '8',
                            label: (
                                <a className='side-bar-item' href>
                                    <span><i className="fas fa-pen"></i></span>
                                    <span className='ms-3'>Thư viện đề thi</span>
                                </a>
                            )
                        }
                    ]
                },
                {
                    key: 'sub4',
                    label: (
                        <li className='side-bar-item'>
                            <span><i className="far fa-calendar-check"></i></span>
                            <span className='ms-3'>Công việc</span>
                        </li>
                    ),
                    children: [
                        {
                            key: '9',
                            label: (
                                <a className='side-bar-item' href>
                                    <span className='ms-3'>Nhóm việc của tôi</span>
                                </a>
                            )
                        }
                    ]
                },
            ]}
        />


    )
}

