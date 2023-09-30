import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export type TCountryId =
  | "algeria"
  | "kenya"
  | "niger"
  | "sa"
  | "tanzania"
  | "zimbabwe"

export type TCountryName =
  | "People's Democratic Republic of Algeria"
  | "Republic of Kenya"
  | "Republic of the Niger"
  | "Republic of South Africa"
  | "United Republic of Tanzania"
  | "Republic of Zimbabwe"

export interface ICountryState {
  id: TCountryId
  isHover: boolean
  name?: TCountryName
}

export interface IAfricaState {
  countries: {
    [id in TCountryId]: ICountryState
  }
}

const initialState: IAfricaState = {
  countries: {
    algeria: { id: "algeria", isHover: false },
    kenya: { id: "kenya", isHover: false },
    niger: { id: "niger", isHover: false },
    sa: { id: "sa", isHover: false },
    tanzania: { id: "tanzania", isHover: false },
    zimbabwe: { id: "zimbabwe", isHover: false },
  },
}

export const africaSlice = createSlice({
  name: "africa",
  initialState,
  reducers: {
    hoverCountry: (state, action: PayloadAction<TCountryId>) => {
      state.countries[action.payload].isHover = true
    },
    unHoverCountry: (state, action: PayloadAction<TCountryId>) => {
      state.countries[action.payload].isHover = false
    },
  },
})

export const selectCountryById = (state: RootState, countryId: TCountryId) =>
  state.africa.countries[countryId]
export const selectIsHoverById = (state: RootState, countryId: TCountryId) =>
  state.africa.countries[countryId].isHover

export const { hoverCountry, unHoverCountry } = africaSlice.actions

export default africaSlice.reducer
