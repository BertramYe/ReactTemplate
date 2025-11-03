

import { classNames } from '@/utils/tools'
import Styles from './index.module.scss'
import { type HTMLAttributes, type RefAttributes } from 'react'

type TContainer = RefAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> &  {

}


const Container = ({className,children,...restProps}:TContainer) => {

    return (
        <div {...restProps} className={classNames(Styles.container,className)}>
            {children}
        </div>
    )

}


export default Container

export {
    type TContainer
}