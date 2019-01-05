import React from "react";
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import TextArea from "antd/lib/input/TextArea";

export interface propTypes extends FormComponentProps {

}

class ContactForm extends React.Component<propTypes> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item
                    label="Name"
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please enter your name', whitespace: true }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: "That doesn't look like a valid e-mail address",
                        }, {
                            required: true, message: 'Please enter your e-mail address',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="Message"
                >
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: 'Please enter a message', whitespace: true }],
                    })(
                        <TextArea />
                    )}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedContactForm = Form.create()(ContactForm);

export default WrappedContactForm;