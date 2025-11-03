// 为了让后续组件样式能覆盖到当前的默认样式，其一定要最先导入， 而对于后面的组件样式的嵌入时，组件内部定义，其样式一定要最后导入，这样 我们的 classNames 的绑定才会生效
import './main.scss';  
import React  from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import Transition from '@/components/Transition'
import { RouterProvider } from "react-router-dom";
import router from '@/routers';

const App: React.FunctionComponent = () => {
  return (
    <ErrorBoundary>
        <React.Suspense fallback={ <Transition/> } >
          <RouterProvider router={router} >
          </RouterProvider>   
        </React.Suspense>
      </ErrorBoundary>
  )
}

export default App

