import style from "./flag.module.css"

interface IFlag {
  id: string
}

export function Flag({ id }: IFlag) {
  return (
    <div className={style.flag}>
      <div className={style.flag__imgWrapper}>
        <img src="" alt={id} />
      </div>
    </div>
  )
}
