import React, { useState } from 'react'
import { Form, Input, Button, Upload, Modal } from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import '../css/Signin.css'
import { Link, useNavigate } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import UserAPI from '../API/Users';
import { async } from '@firebase/util';
const Signup = () => {
    let navigate = useNavigate();

    const signup = async (values) => {
        console.log(values)
        // const photo = document.querySelector("#photo").files[0]
        // const imageRef = ref(storage, "images")
        // uploadBytes(imageRef, photo).then(() => {
        //     getDownloadURL(imageRef).then((url) => {
        //         console.log(url)
        //         // setImage(url)

        //     })
        // })
        const user={
            email:values.email,
            avatar:"",
            name:values.name,
            password:values.password
        }
        const { data } = await UserAPI.signup(user)
        console.log(data)
        // localStorage.setItem("user", JSON.stringify(data.user))
        // alert("Mời bạn vào trang web")
        // navigate("/table");

    };

    const [image, setImage] = useState('')
    const normFile = (e) => {
        console.log(e)

        if (Array.isArray(e)) {
            return e;
        }
        return e;
    };
    return (
        <Modal visible={true} className="background" >
            <div className="logo" style={{ textAlign: 'center', marginBottom: "20px" }}>
                <img src="https://www.jedecore.com/gif/bon-appetit/bon-appetit-017.gif" alt="" />
            </div>
            <h3 style={{ textAlign: 'center', margin: "20px 0", color: "#ee4d2d" }}>Đăng ký</h3>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={signup}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Họ và Tên" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="avatar"
                    label="Avatar"
                >
                    <label htmlFor='photo'>

                        <UploadOutlined />
                        <img src={image} alt="" />
                    </label>
                    <input type='file' style={{ display: "none" }} id='photo' />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Đăng ký
                    </Button>
                    <Link style={{ marginLeft: '10px' }} to="/signin">Đăng nhập</Link>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Signup