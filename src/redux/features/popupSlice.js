const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isMobileMenuOpen: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const { toggleMobileMenu } = popupSlice.actions;
export default popupSlice.reducer;
