import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import React, { useCallback, useState } from 'react'
import Modal from './Modal'
import Input from '../Input'
import axios from 'axios'
import toast from 'react-hot-toast'
import useUserStore from '@/hooks/useUser'



type Props = {}

const LoginModal = (props: Props) => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const { setUser,user } = useUserStore();

    const onToggle = useCallback(()=>{
        if(isLoading){return}
        loginModal.onClose()
        registerModal.onOpen()
    },[isLoading,registerModal,loginModal])

    const onSubmit = useCallback(async () => {
        try {
          const { data } = await axios.post('/api/auth/login', { email, password });
          const { password: _, ...userWithoutPassword } = data; // Omit password from the user object
          setUser(userWithoutPassword); // Update global user state
          toast.success('User login successfully');
          loginModal.onClose();
          console.log(user);
          
        } catch (error) {
          toast.error('Failed to login:');
        } finally {
          setIsLoading(false);
        }
      },  [email, password, loginModal, setUser]);
      

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input placeholder="email"
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email}
            />

            <Input placeholder="password"
                 onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                 type='password'
            />
        </div>
        
    )

    const footerContent = (
        <div className=' text-neutral-400 text-center mt-4'>
            <p>First time using Music Harbor?
                <span   onClick={onToggle}
                        className='text-white cursor-pointer hover:underline pl-2'> 
                    Sign up
                </span>
            </p>
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={loginModal.isOpen} title="Login" 
                actionLabel='Log in' onClose={loginModal.onClose} 
                onSubmit={onSubmit} body={bodyContent} footer={footerContent}
        />
    )
}

export default LoginModal