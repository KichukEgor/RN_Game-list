import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(38, 37, 37, 0.8);
`

const ModalView = styled.View`
  height: 80%;
  margin-top: auto;
  padding: 10px 10px 0 10px;
  background-color: #262525;
`

const AdaptiveTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
`

const CustomModal = ({ buttonLabel = '', icon, children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        {icon}
        {!!buttonLabel && <Text>{buttonLabel}</Text>}
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible)
        }}
      >
        <AdaptiveTouchableOpacity onPress={() => setIsModalVisible(false)}>
          <ModalBackground />
        </AdaptiveTouchableOpacity>
        <ModalView>{children}</ModalView>
      </Modal>
    </>
  )
}

export default CustomModal
