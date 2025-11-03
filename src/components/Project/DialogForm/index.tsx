import { useState } from "react";
import Button,{ type TButton} from "@/components/Base/Button"
import Form,{ type TForm } from "@/components/Base/Form";
import Styles from './index.module.scss';
import { useActionState,type IAction,type TState } from "@/hooks";
import DialogBtn,{type TDialogBtn} from "@/components/Project/DialogBtn";
import Container from "@/components/Base/Container";

type TDialogForm = Omit<TDialogBtn, 'children'> & {
    actionFn?:IAction<FormData>
    children?:TForm['children'],
    submitBtnList:TButton['children'][]
}


const DialogForm = ({actionFn,children,disabled,submitBtnList,...restProps}:TDialogForm) => {
    const [actionType,setActionType] = useState<TButton['children']>(submitBtnList[0])
    const [_state, action, isPending] = useActionState<FormData>(async(_pre:TState,formData:FormData) => {
        if(actionFn){
            // 下面这个后面如果有必要可以使用 const actionType = JSON.parse(Object.fromEntries(formData).actionType as string) 进行解析 
            formData.append('actionType',`${actionType}`)
            return await actionFn(_pre,formData)
        }
    },undefined)

    return (
        <DialogBtn {...restProps} disabled={disabled || isPending} >
            <Form action={action} className={Styles.createFrom} >
                {
                    children
                }
                <Container className={Styles.submitBtnContainer}>
                    {
                        submitBtnList.map((
                            submitChidren,submit_index
                        ) => (
                            <Button 
                                key={submit_index} type={'submit'} disabled={disabled || isPending} 
                                className={Styles.toSubmitBtn}
                                onClick={() =>{
                                        // 在提交之前会触发的事件
                                       setActionType(submitChidren)
                                } }
                                includeLoadingIcon={actionType === submitChidren} 
                                >
                                {submitChidren}
                            </Button>
                        ))
                    }
                </Container>
            </Form>
        </DialogBtn>
    )
}

export default DialogForm



export {
    type TDialogForm
}