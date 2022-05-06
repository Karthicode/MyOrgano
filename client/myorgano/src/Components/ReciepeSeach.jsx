import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
//import { AudioOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import * as SearchUtil from './../ApiUtil/get-reciepes'
import { useSelector } from 'react-redux';
import cuisines from '../values-util/consts';
import { Form, Row, Col, Button, Card, Pagination } from 'antd';
import './../styles/cards.css'
//import { DownOutlined, UpOutlined } from '@ant-design/icons';




export const ReciepeSearchForm = () => {
    const { Meta } = Card;
    const { Option } = Select;
    const [data, Setdata] = useState([]);
    const [form] = Form.useForm();
const showTotal = (total) => {
    return `Total ${total} items`;

}
    const handleSearch = (values) => {
        console.log(values)
        SearchUtil.getReciepeFromSearch(values)
            .then((results) => {
                console.log(results.results);
                Setdata(results.results);
            })
    }


    return (
        <Space direction="vertical">
            <Form
                form={form}
                name="reciepe_search"
                className="ant-reciepe-search-form"
                onFinish={handleSearch}
            >
                <Form.Item
                    name='query'
                    valuePropName='query'
                    label='Reciepe Name'
                    rules={[
                        {
                            required: true,
                            message: 'Enter a Reciepe Name!',
                        },
                    ]}
                    
                >
                <Input placeholder="Reciepe Name" />
                </Form.Item>
                <Form.Item
                    name='cuisine'
                    valuePropName='cuisine'
                    label='Cuisine'
                    rules={[
                        {
                            required: true,
                            message: 'Select a Cuisine!',
                        },
                    ]}
                    
                >
                <Select valuePropName='cuisine' style={{ width: 140 }}>

                    {cuisines.map((cuisine, index) => <Option value={cuisine} key={index}>{cuisine}</Option>)}
                </Select>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Search Reciepes
                </Button>
            </Form>
            <div className="search-result-list">
                {data.map((searchData) => <Card key={searchData.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={searchData.image} />}
                >
                    <Meta title={searchData.title} />
                </Card>)}
                <Pagination size="small" total={data.length} showTotal={showTotal} />
            </div>
           
        </Space>


    );
}

export default ReciepeSearchForm;