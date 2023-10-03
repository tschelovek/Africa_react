import { ICountryProps, ICountryStyle } from "../../Africa"
import { connect } from "react-redux"
import { RootState } from "../../../../app/store"
import {
  hoverCountry,
  selectIsHoverById,
  TCountryId,
  unHoverCountry,
} from "../../africaSlice"

interface IKenyaProps extends ICountryProps {}

const id: TCountryId = "kenya"

function Kenya(props: IKenyaProps) {
  const componentStyle: ICountryStyle = {
    fill: props.isHovered ? "rosybrown" : "",
  }

  const handleMouseOver = () => {
    props.hoverCountry(id)
  }
  const handleMouseOut = () => {
    props.unHoverCountry(id)
  }

  return (
    <>
      <path
        data-country-id={id}
        data-flag-src="./images/kenya.svg"
        stroke="white"
        strokeWidth="1"
        d="M1004.31 191.554L1003.67 192.482L1002.89 193.596L1001.46 195.644L1000.37 196.722L999.544 197.538L999.467 197.685L999.47 198.593L999.48 200.813L999.497 205.251L999.514 209.687L999.53 214.123L999.538 216.341L999.542 217.087L1000.26 218.02L1000.97 218.931L1001.9 220.136L1002.41 220.781L1002.49 220.997L1002.46 221.429L1001.69 222.333L1001.06 222.745L1000.22 222.941L999.964 222.903L999.632 222.775L999.502 222.992L999.405 223.33L999.217 223.258L999.076 223.158L999.161 223.758L999.247 224.055L999.117 224.451L998.706 224.8L998.669 225.097L997.778 225.871L996.514 225.956L995.85 226.341L995.555 226.656L995.329 227.345L995.408 228.4L995.055 229.212L994.99 229.62L994.336 230.146L994.047 230.63L993.833 231.122L993.647 231.338L993.425 232.44L993.121 233.11L993.038 233.333L992.963 233.533L992.728 233.926L992.574 234.197L992.464 234.375L991.694 236.093L991.093 236.869L990.621 236.78L990.308 237.08L990.274 237.222L990.107 237.142L989.714 236.857L988.905 236.274L988.095 235.691L987.286 235.107L986.477 234.524L985.667 233.941L984.858 233.357L984.048 232.774L983.239 232.191L982.764 231.849L982.555 231.647L982.39 231.245L982.311 231.145L982.095 231.019L981.842 230.99L981.769 230.913L981.77 230.718L981.857 230.439L982.155 229.905L982.187 229.59L982.129 229.233L982.037 228.661L981.956 228.531L981.419 228.23L980.296 227.604L979.173 226.977L978.05 226.35L976.925 225.723L975.802 225.097L974.679 224.47L973.556 223.843L972.433 223.217L971.308 222.59L970.185 221.963L969.06 221.336L967.937 220.71L966.814 220.083L965.691 219.456L964.568 218.829L963.443 218.203L963.021 217.967L962.641 217.769H962.24L962.223 216.872L962.35 214.59L962.335 212.585L962.45 211.581L962.946 210.944L963.175 210.482L963.338 209.836L963.597 209.31L964.185 208.881L964.29 208.645L964.914 207.93L965.287 207.01L965.569 206.697L965.922 206.408L966.17 206.255L966.58 206.103L966.901 206.016L966.959 205.942L966.987 205.793L966.88 205.223L967.017 205.036L967.235 204.655L967.485 204.3L967.71 204.073L967.836 203.841L967.894 203.441L967.904 203.156L967.902 202.691L967.83 201.636L967.565 200.753L967.402 199.764L967.522 199.439L967.314 198.859L967.211 198.827L967.042 198.701L966.824 198.153L966.66 197.655L966.559 197.531L965.853 197.095L965.502 196.066L965.107 195.837L964.893 194.814L964.852 194.523L965.075 193.502L965.053 193.268L964.816 193.053L964.153 192.832L963.616 192.411L963.686 192.264L963.725 192.111L963.441 192.009L962.619 190.263L963.676 189.213L964.749 188.151L966.118 186.805L967.374 185.568L968.459 184.5L969.428 183.547L969.404 183.728L969.408 183.969L969.528 184.117L969.727 184.218L970.003 184.111L970.245 183.962L970.482 183.93L971.937 184.326L972.182 184.671L972.165 185.043L972.228 185.313L972.116 185.585L971.996 186.404L972.033 187.156L972.467 187.713L972.858 188.149L973.167 188.762L973.397 188.951L973.712 189.049L974.713 189.075L976.195 189.115L977.62 189.153L977.75 189.168L978.052 189.251L979.365 190.078L980.567 190.836L981.585 191.495L982.572 192.135L983.532 192.758L984.276 193.274L985.01 193.43L986.203 193.506L987.027 193.532L987.789 193.749L988.924 193.951L989.769 194.055L990.28 194.172L991.697 194.291L991.932 194.221L992.558 193.649L993.258 192.719L993.532 192.207L994.437 191.697L996.028 190.988L997.149 190.485L998.396 189.981L998.963 190.418L999.745 191.118L1000.09 191.463L1000.37 191.616L1000.8 191.718L1001.31 191.72L1001.6 191.705L1002.17 191.614L1003.52 191.531L1004.31 191.554ZM999.624 223.864L999.429 223.909L999.53 223.607L1000.11 223.22L1000.34 223.307L1000.39 223.394L1000.38 223.475L1000.28 223.555L999.624 223.864Z"
        fill="white"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        style={componentStyle}
      />
      <circle
        data-marker-border-id={id}
        cx="986.5"
        cy="204.5"
        r="7.4"
        stroke="#9F2D20"
        strokeWidth="0.2"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      />
      <circle
        data-marker-id={id}
        cx="986.5"
        cy="204.5"
        r="6.14754"
        fill="#9F2D20"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
      />
    </>
  )
}

export default connect(
  (state: RootState) => ({
    isHovered: selectIsHoverById(state, id),
  }),
  { hoverCountry, unHoverCountry },
)(Kenya)
