import { Button, Form, Input } from 'antd';
import { AuthFormFields } from './constants';
import s from './authForm.module.scss';

export const AuthForm = () => {
  const { Item, useForm } = Form;
  const [form] = useForm();
  return (
    <Form {...{ form, className: s.authFormWrapper, layout: 'horizontal' }}>
      <Item {...{ name: AuthFormFields.email, label: 'Введите свой email' }}>
        <Input />
      </Item>
      <Item {...{ name: AuthFormFields.password, label: 'Введите свой пароль' }}>
        <Input />
      </Item>
      <Button htmlType="submit">Войти</Button>
    </Form>
  );
};
