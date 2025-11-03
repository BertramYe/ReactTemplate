
import { useState } from "react";
import { ToastMessage  } from "@/hooks";
import Container from "@/components/Base/Container";
import Input from "@/components/Base/Input";
import Button from "@/components/Base/Button";
import Logo from '@/asset/image/logo.ico'
import Styles from './index.module.scss'

const HomePage = () => {
    const [name,setName] = useState<string | undefined>()
    const buttonClick = () => {
        if(name && name.trim().length > 0 ) {
            ToastMessage({message:`hello ${name}, welcome to the ReactTemplate, which built by Bertram !`,ok:true})
        }else{
            ToastMessage({message:"your name can't be empty !",ok:true})
        }
    }

    return (
        <Container className={Styles.container}>
            <h1>ReactTemplate</h1>
            <img src={Logo} alt="ReactTemplate" />
            <Input className={Styles.input} type="text" placeholder="please input your name" onChange={(e) => setName(e.currentTarget.value)}/>
            <Button className={Styles.button}  onClick={()=>buttonClick()}> greet </Button>
        </Container>
    )

}

export default HomePage