type TObject = {
  [key:string]:any
}


interface ICallback<T> {
    (..._argrs:T[]):void | Promise<void>
}