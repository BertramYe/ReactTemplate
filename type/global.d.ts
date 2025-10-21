type TObject = {
  [key:string]:any
}


interface ICallback<T> {
    (..._argrs:T[]):void | Promise<void>
}

type TResponse<T> = {
    ok: boolean,
    message?: string,
    data?: T,
    redirect_to?:string
}