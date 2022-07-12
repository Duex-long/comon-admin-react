import {
  Button, Form, Input, message,
} from 'antd';
import { useState } from 'react';

interface LoginInfo {
  username: string
  password: string
}

const LoginForm = () => {
  // const [loginInfo,setLoginInfo] = useState({username:'',password:''})
  const success = () => {
    message.success('Login Success');
  };
  const [loading, setLoading] = useState(false);
  const onFinish = (value: LoginInfo) => {
    console.log(value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      success();
    }, 5000);
  };
  return (
    <>
      <div className='LoginForm w-full  mt-20px'>
        <Form
          className='text-14px'
          name='loginform'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          colon={true}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
