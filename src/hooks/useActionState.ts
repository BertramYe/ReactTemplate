import React from "react";
import useMessager, { type TMessager } from "./useMessager";

/**
 * 通用的 Action 类型
 * @template TInput 输入（如 FormData）
 * @template TState 状态类型（默认 TMessager）
 */

type TState = TMessager & TResponse<TObject>

interface IAction<T, S = TState> {
  (prev: S, formData: T): TState | void | Promise<TState | void>;
}

/**
 * 自定义 Hook: useActionState
 * 支持异步 action、void 返回（不更新 state）
 */
const useActionState = <TInput,S extends TState= TState>(action: IAction<TInput, S>, initialState?: S, permalink?: string ) => {
  const [state, dispatch, isPending] = React.useActionState<S, TInput>(action as any, initialState as any, permalink);

  // 将消息内容传入 useMessager 做副作用处理
  useMessager(state);

  return [state, dispatch, isPending] as const;
}

export default useActionState;


export {
  type TState,
  type IAction
}
