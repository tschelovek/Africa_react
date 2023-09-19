import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import {
  hoverCountry,
  selectCountryById,
  // selectIsHoverById,
  unHoverCountry,
} from "../../africaSlice"
import { ICountry } from "../../Africa"
import { useState } from "react"
import { connect } from "react-redux"
import { RootState } from "../../../../app/store"

interface IZimbabwe extends ICountry {}

// export function Zimbabwe({ style }: IZimbabwe) {
function Zimbabwe(props: any) {
  const country = useAppSelector((state) =>
    selectCountryById(state, "zimbabwe"),
  )

  const isHover = props.country.isHover
  // const isHoverById = useAppSelector((state) =>
  //   selectIsHoverById(state, "zimbabwe"),
  // )
  // const dispatch = useAppDispatch()
  // let isHover = country?.isHover
  // const [isHover, setIsHover] = useState(false)
  // console.log(isHoverById)
  console.log(isHover)
  // console.log(this)
  console.log(props)
  // console.log(isHover)

  // const myStyle = {
  //   ...style,
  //   fill: isHover ? style.fill : "",
  // }

  return (
    <>
      <path
        data-country-id="zimbabwe"
        data-flag-src="./images/zimbabwe.svg"
        stroke="white"
        strokeWidth="1"
        d="M948.464 333.556L947.987 333.231L947.336 333.02L946.506 332.922L945.429 332.961L944.104 333.141L942.682 332.924L941.163 332.316L939.903 332.101L938.396 332.365L938.329 332.371L938.07 332.165L937.657 331.721L936.971 331.642L936.785 331.54L936.631 331.374L936.53 331.163L936.49 330.927L936.603 330.198L936.541 330.117L936.359 330.028L935.981 329.941L935.078 329.611L933.94 329.29L932.094 328.939L931.377 328.848L931.209 328.741L931.003 328.473L930.648 327.637L930.316 327.085L929.521 326.234L929.395 325.972L929.435 325.296L929.493 324.752L929.577 324.291L929.54 323.859L929.529 323.323L929.553 322.964L929.446 322.81L929.159 322.7L928.338 322.651L927.346 322.672L927.315 322.128L927.219 321.286L927.035 320.803L926.806 320.552L926.349 320.289L925.427 319.931L924.171 319.385L923.097 318.577L921.867 317.575L921.482 317.401L921.027 316.461L920.336 314.853L920.381 314.319L920.276 314.056L919.604 313.269L919.455 312.859L919.337 312.446L918.268 311.294L917.904 310.792L917.626 310.147L917.35 309.631L917.117 309.424L916.813 309.074L916.603 308.674L916.505 308.376L916.586 307.978L916.689 307.704L917.705 307.987L918.261 308.012L918.696 307.872L919.234 308.061L919.876 308.578L920.574 308.678L921.331 308.357L922.353 308.455L923.639 308.97L924.706 309.074L925.976 308.613L927.108 307.341L928.175 306.146L929.223 304.768L929.854 303.656L930.779 302.752L932 302.055L933.243 301.468L935.146 300.749V300.751L935.525 300.156L935.653 299.511V298.612L935.75 298.031L935.949 297.765L936.265 297.559L936.672 297.291L937.925 296.609L938.975 296.173L940.252 295.886L941.651 295.885L942.999 295.881L943.766 295.879L943.777 296.742L943.835 297.714L943.985 297.806L944.999 297.827L946.626 297.897L948.194 297.961L949.195 298.667L949.531 298.818L950.571 299.007L951.901 300.183L953.501 300.292L954.601 300.66L955.571 301.064L956.128 301.549L956.489 301.659L956.977 301.695L957.214 301.74L957.163 302.089L956.836 302.682L956.879 303.532L957.328 304.71L957.388 305.737L957.251 307.547L957.255 309.304L957.302 309.933L957.375 310.348L957.471 310.577L957.452 310.837L957.186 311.577L956.971 312.355L956.964 312.666L956.881 312.887L956.722 313.082L956.023 313.442L955.905 313.665L955.907 314.069L955.995 314.409L956.258 314.533L956.573 314.726L956.697 314.979L956.699 315.247L956.598 315.743L956.316 316.564L956.598 317.512L956.911 318.128L957.345 318.837L957.525 319.277L957.516 319.592L957.45 319.9L956.802 321.203L956.335 322.014L955.764 322.883L955.009 323.428L954.814 323.691L954.737 323.989L954.763 324.642L954.729 325.327L954.083 326.379L954.483 327.285L954.393 327.37L954.175 327.498L953.246 328.519L952.305 329.556L951.617 330.313L950.836 331.173L949.961 332.14L949.212 332.969L948.464 333.556Z"
        fill="white"
        // onMouseEnter={() => {
        //   dispatch(hoverCountry("zimbabwe"))
        // }}
        // onMouseLeave={() => dispatch(unHoverCountry("zimbabwe"))}
        // style={myStyle}
        onMouseEnter={() => {
          hoverCountry("zimbabwe")
        }}
        // onClick={() => hoverCountry("zimbabwe")}
      />
      <circle
        data-marker-border-id="zimbabwe"
        cx="941.5"
        cy="314.5"
        r="7.4"
        stroke="#9F2D20"
        strokeWidth="0.2"
      />
      <circle
        data-marker-id="zimbabwe"
        cx="941.5"
        cy="314.5"
        r="6.14754"
        fill="#9F2D20"
      />
    </>
  )
}

// const mapStateToProps = (state, ownProps) => {
//     const countries = selectCountryById(state, ownProps)
// }

export default connect(
  (state: RootState) => ({
    country: selectCountryById(state, "zimbabwe"),
  }),
  { hoverCountry, unHoverCountry },
)(Zimbabwe)
