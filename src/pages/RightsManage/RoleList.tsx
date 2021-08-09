import React, { useState } from 'react';
import TurnState from './component/TurnState'
import { Modal, Button, Space } from 'antd';

const { confirm } = Modal;
function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function RoleList() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log('ok')
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log('?')
  };

  return (
    <div>
      <TurnState buttonText='提交' id='id_1' title='你确定要提交这个触点吗？' context='是否上线' />
      <TurnState buttonText='下线' id='id_2' title='请输入下线原因' needReson context='是否下线' />
      <Space>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Space>
    </div>
  );
}

export default RoleList;