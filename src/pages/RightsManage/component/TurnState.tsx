import React from 'react';
import { Modal, Button, message, Input } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface ITurnStateProps {
    id?: string;
    handleTurnStateAfter?: () => void;
    currentStatus?: string
    title?: string;
    buttonText?: string;
    context?: string;
    needReson?: boolean;
}

const { confirm } = Modal;
function showConfirm() {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

const TurnState: React.FC<ITurnStateProps> = (props) => {
    return (
        <div>
            <Button onClick={showConfirm}>Confirm</Button>
            <Button onClick={()=>{
                Modal.confirm({
                    title: props?.title,
                    icon: <ExclamationCircleOutlined />,
                    content: (
                        props?.needReson ? (<div>
                            <span>原因</span>
                            <Input.TextArea onChange={()=>{
                                // 给reson赋值
                            }} />
                        </div>):props?.context
                    ),
                    onOk:()=>{
                        console.log(1)
                    }
                })
            }}>
                {props.buttonText}
            </Button>
        </div>
    )
}

// export default React.memo(TurnState);
export default TurnState;