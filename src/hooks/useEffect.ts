import React from 'react'

const useEffect = (effect: () => void, deps: ReadonlyArray<any>,keepDefaultEffect?:boolean) => {
  
  // // 保留最初的原始状态， 根据不同依赖去消除对应影响，以及决定是否启动页面默认加载完时，当 deps 为 [] 时的页面的重复渲染
  // let disable:boolean = true;
  // if(keepDefaultEffect) { 
  //    disable = false // 保留原始状态，不禁用最初进来的影响
  // }else{
  //   // 未定义时
  //   if(keepDefaultEffect == undefined){
  //     if(deps.length == 0){
  //        根据是否是开发环境来决定渲染模式
  //       disable = process.env.NODE_ENV === 'development' ? true : false
  //     }else{
  //       disable = true
  //     }
  //   }else
  //   //  不保留
  //   if(keepDefaultEffect == false){
  //     disable = true
  //   }
  // }
  
  // 以上可以翻译为下面这个表达式 
  // const disable = React.useRef(keepDefaultEffect ? false : (keepDefaultEffect === false ? true : (deps.length == 0 ? false: true) ))
  const disable = React.useRef<boolean>( keepDefaultEffect ? false : (keepDefaultEffect === false || deps.length !== 0 || process.env.NODE_ENV === 'development'  ))

  React.useEffect(() => {
    if (disable.current) {
      disable.current = false

      return
    }

    return effect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useEffect
