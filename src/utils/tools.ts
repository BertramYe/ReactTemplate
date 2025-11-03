export const isEmpty = (value: any) => ['undefined', 'null', 'NaN', ''].includes(String(value)) && !Array.isArray(value)

export const removeEmptyArrayElement = (arr: any[]) => {
  if (isEmpty(arr)) {
    return []
  }

  return arr.filter(ele => !isEmpty(ele))
}

export const removeElementFromObject = (obj: TObject,toDeleteKey:any ) => {
  const filtered: TObject = {}
  if (isEmpty(obj)) {
    return filtered
  }
  for (const [key, value] of Object.entries(obj)) {
    if (!isEmpty(key) && !(toDeleteKey.toString().trim() === key.trim())) {
      filtered[key] = value
    }
  }
  return filtered
}


export const removeEmptyObjectElement = (obj: TObject) => {
  if (isEmpty(obj)) {
    return {}
  }
  const filtered: any = {}
  for (const [key, value] of Object.entries(obj)) {
    if (!isEmpty(key) && !isEmpty(value)) {
      filtered[key] = value
    }
  }
  return filtered
}


/**
 * 在组件内部调用当前的合并时，其样式一定要在所有其他组件导入后，最后再导入当前组件的 Styles 自定义的样式，
 * 这样我们的 classNames 在合并时，才能保证最新的 class 样式一定是放在最后渲染，才能保证后面添加的样式覆盖住前面的样式
 * 
 * 如：
 * import Container,{type TContainer} from "@/components/Base/Container";
 * import { classNames } from "@/utils/tools.ts"
 * import Styles from './index.module.scss';    ，<== 一定要在当前自定义组件的所需的所有组件导入完成后再导入自定义的当前样式，这样才能保证自定义样式去覆盖原默认样式
 * 
 * type TCustomisedContainer = TContainer & {
 * 
 * }
 * const CustomisedContainer = ({className,...restProps}:TCustomisedContainer) => {
 * 
 *    return (
 *        <Container className = {classNames(Styles.container,className)}>  </Container >
 *      )
 * }
 * 
 * @param classNameList 需要添加的新的类的列表
 * @returns 新的绑定的 class 的 string 
 */
export const  classNames = (...classNameList:( CSSModuleClasses | string | undefined)[]) => {
    // filter(Boolean) 用来从数组中移除所有 "假值"（falsy values），包括 undefined、null、false、0、NaN 和空字符串 ""。
    const prefilterClassName = classNameList.filter(Boolean).join(" ")
    // const prefilterClassName = classNameList.filter(Boolean).reverse().join(" ");
    return ` ${prefilterClassName} `;
}


export const generateUnitKey = (type?:'time') => {
    // performance.now() 性能和精确度比 Date.now() 要好
    if(type == 'time'){
        return performance.now().toString().replace('.','')
    }else{
        return performance.now().toString().replace('.','')
    }
}


