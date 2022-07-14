import { Modal } from 'antd'

const UserForm = (props:{isModalVisible:boolean,handleOk:()=>void,handleCancel:()=>void}) => (

    <Modal visible={props.isModalVisible}
      onOk={props.handleOk}
      onCancel = {props.handleCancel}
      destroyOnClose = {true}
      title="Basic Modal"
    >
      测试
    </Modal>


  )

export default UserForm