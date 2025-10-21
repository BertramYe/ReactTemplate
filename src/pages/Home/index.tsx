
import { useState } from "react";
import useMessager from "@/hooks/useMessager";
import Styles from './index.module.scss'
import Logo from '@/asset/image/logo.ico'

const HomePage = () => {

    const [message,setGreetMsg] = useState<TResponse<string>>()
    const [name,setName] = useState<string | undefined>()
    useMessager(message)
    const buttonClick = () => {
        if(name && name.trim().length > 0 ) {
            setGreetMsg ({
                ok:true,
                message: `hello ${name}, welcome to the ReactTemplate, which built by Bertram !`
            })
        }else{
            setGreetMsg({
                ok:false,
                message: "your name can't be empty !"
            })
        }
    }


    return (
        <div className={Styles.container}>
            <h1>ReactTemplate</h1>
            <img src={Logo} alt="TauriReactTemplate" />
            <input className={Styles.input} type="text" placeholder="please input your name" onChange={(e) => setName(e.currentTarget.value)}/>
            <button className={Styles.button}  onClick={()=>buttonClick()}> greet </button>
        </div>
    )

}

export default HomePage