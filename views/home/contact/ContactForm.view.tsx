import React from 'react';
import styles from './ContactForm.module.scss';
import { Form, Input, Row, Col, Button } from 'antd';
import useContactForm from '@/state/actions/contact/useContactForm';

const ContactForm = () => {
  const [form] = Form.useForm();
  const { mutate: sendEmail, isLoading, isError, error } = useContactForm();
  return (
    <div className={styles.container}>
      <Form
        form={form}
        name="contact"
        layout="vertical"
        onFinish={(values) => {
          sendEmail(values);
        }}
      >
        <Row justify={'space-evenly'} gutter={20}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input disabled={isLoading} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input disabled={isLoading} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} disabled={isLoading} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={'center'}>
          {/* <Col span={24}> */}
          <Button
            loading={isLoading}
            type="primary"
            className={styles.button}
            htmlType="submit"
          >
            Submit
          </Button>
          {/* </Col> */}
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
