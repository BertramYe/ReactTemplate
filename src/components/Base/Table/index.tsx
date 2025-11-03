
import { classNames } from '@/utils/tools'
import Styles from './index.module.scss'
import type {HTMLAttributes, RefAttributes} from  'react'


type TTable = RefAttributes<HTMLTableElement> & HTMLAttributes<HTMLTableElement> & {

}

const Table = ({className,children,...restProps}:TTable) => {
    return (
        <table {...restProps} className={classNames(Styles.table,className)}>
            {children}
        </table>
    )
}


export default Table



export  type{
    TTable
}