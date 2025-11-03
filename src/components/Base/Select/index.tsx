

import type { RefAttributes, SelectHTMLAttributes } from 'react'
import Styles from './index.module.scss'
import { classNames } from '@/utils/tools'



type TSelect = RefAttributes<HTMLSelectElement> & SelectHTMLAttributes<HTMLSelectElement> & {

}


const Select = ({className,children,...restProps}:TSelect) => {


    return (
        <select {...restProps} className={classNames(Styles.select,className)}>
            {children}
        </select>
    )
}

export default Select