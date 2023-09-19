import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export type TCountriesId =
  | "algeria"
  | "kenya"
  | "niger"
  | "sa"
  | "tanzania"
  | "zimbabwe"

export interface ICountryState {
  id: TCountriesId
  isHover: boolean
}

export interface ICountryState {
  id: TCountriesId
  isHover: boolean
}

export interface IAfricaState {
  countries: Array<ICountryState>
}

export interface IAfricaObjectState {
  countries: {
    [id in TCountriesId]: ICountryState
  }
}

const initialState: IAfricaState = {
  // countries: [
  //   { id: "algeria", isHover: false },
  //   { id: "kenya", isHover: false },
  //   { id: "niger", isHover: false },
  //   { id: "sa", isHover: false },
  //   { id: "tanzania", isHover: false },
  //   { id: "zimbabwe", isHover: false },
  // ],
  countries2: {
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
    hoverCountry: (state, action: PayloadAction<string>) => {
      state.countries.map((country) =>
        country.id === action.payload ? (country.isHover = true) : null,
      )
      // state.countries.map((country) => (country[action.payload].isHover = true))
    },
    unHoverCountry: (state, action: PayloadAction<string>) => {
      state.countries.map((country) =>
        country.id === action.payload ? (country.isHover = false) : null,
      )
    },
  },
})

export const selectCountries = (state: RootState) => state.africa.countries
// const selectorIsHoverById = (countries: [], id: string) =>
//   countries.map((country) => country[id]?.isHover)
// const selectCountries = state.africa.countries;
// export const selectorCountryById = (
//   state.africa.countries,
//   id: TCountriesId,
// ) => countries.map((country) => (country.id = id))
export const selectCountryById = (state: RootState, countryId: TCountriesId) =>
  state.africa.countries.find((country) => country.id === countryId)
// export const selectorIsHoverById = createSelector([
//   selectCountries,
//   selectorCountryById,
// ])
// export const selectIsHoverById = (state: RootState, countryId: TCountriesId) =>
//   state.africa.countries.find((country) => country.id === countryId).isHover

export const { hoverCountry, unHoverCountry } = africaSlice.actions

export default africaSlice.reducer
