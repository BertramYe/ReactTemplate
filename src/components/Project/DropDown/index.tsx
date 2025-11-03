import Container  from "@/components/Base/Container";
import Input,{type TInput} from "@/components/Base/Input";
import Styles from './index.module.scss'
import { classNames } from "@/utils/tools";
import type { DOMAttributes } from "react";

type TOption = {
    key:string,
    value:string | number | undefined
}

type TDropDown = Omit<TInput, 'defaultValue' | 'onChange'> & {
    onSelected?:(option:TOption) => void,
    Options?:{
        [key in string]: TOption['value']
    },
    onRenderOption?: (option:TOption) => DOMAttributes<HTMLLIElement>['children'] 
}


const DropDown = ({className,type,onSelected,
                    onRenderOption,value,
                    Options,...restProps}:TDropDown) => {
    return (
        <Container className={Styles.container}>
            <Container className={Styles.inputContainer} >
                <Input {...restProps} type={type ?? 'text'} 
                value={value ?? ''}
                defaultValue={Options ? Options[Object.keys(Options)[0]]: ''}
                className={classNames(Styles.input,className)} readOnly/>
                <span className={classNames(Styles.dropIcon)}>{`<`}</span>
            </Container>
            <ul className={Styles.optionsContainer}>
                {
                    Options && 
                    Object.keys(Options).map((key,key_index) => (
                        <li key={key_index} 
                            className={Styles.option}
                            onMouseDown={() => {
                                // 对于子选项的跳出或者弹窗时，记得下面这个减少由于 onMouseDown 向父元素的传递和减少渲染消耗
                                // e.stopPropagation()
                                if(onSelected){
                                    onSelected({key,value: Options[key]})
                                }
                            }}
                            >
                            {
                                onRenderOption ? onRenderOption({key,value: Options[key]}): 
                                Options[key]
                            }
                        </li>
                    ))
                }
            </ul>
        </Container>
    )
}

export default DropDown


export {
    type TDropDown,
    type TOption
}