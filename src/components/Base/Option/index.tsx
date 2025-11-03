import type { OptionHTMLAttributes } from "react"
import Styles from './index.module.scss'
import { classNames } from '@/utils/tools'

type TOption = OptionHTMLAttributes<HTMLOptionElement> & {

}



const Option = ({className,children,...restProps}:TOption) => {


    return (
        <option {...restProps} className={classNames(Styles.option,className)}>
            {children}
        </option>
    )

}


export default Option


export {
    type TOption
}