import React from 'react'
import LoginModal from './Modal/LoginModal'
import RegisterModal from './Modal/RegisterModal'

type Props = {}

const UserMenu = (props: Props) => {
  return (
    <div>
        <LoginModal />
        <RegisterModal/>
    </div>
  )
}

export default UserMenu