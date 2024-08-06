import { useState, useEffect } from 'react';
import { Form, Input, Button, Table, notification, Modal, Popconfirm } from 'antd';
import axios from 'axios';

const AddProduct = () => {
  const [form] = Form.useForm();
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to fetch products',
      });
    }
  };

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:3000/products', values);
      notification.success({
        message: 'Success',
        description: 'Product added successfully',
      });
      form.resetFields();
      fetchProducts();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to add product',
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      notification.success({
        message: 'Success',
        description: 'Product deleted successfully',
      });
      fetchProducts();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to delete product',
      });
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setIsModalVisible(true);
  };

  const handleModalOk = async () => {
    try {
      await axios.put(`http://localhost:3000/products/${editingProduct.id}`, form.getFieldsValue());
      notification.success({
        message: 'Success',
        description: 'Product updated successfully',
      });
      setEditingProduct(null);
      fetchProducts();
      setIsModalVisible(false);
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to update product',
      });
    }
  };

  const handleModalCancel = () => {
    setEditingProduct(null);
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="product" style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button
            type="link"
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this product?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Product</h2>
      <div className="formWrapper">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            title: '',
            category: '',
            image: '',
            price: '',
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please input the category!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true, message: 'Please input the image URL!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </div>
      <h2>Product List</h2>
      <Table columns={columns} dataSource={products} rowKey="id" />

      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleModalOk}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please input the category!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true, message: 'Please input the image URL!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddProduct;
