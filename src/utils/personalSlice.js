import { createSlice } from "@reduxjs/toolkit";

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState: {
    currentTab: "About",
    tabs: ["About", "Projects", "Contact"],
    projects: [
      {
        type: [
          "react",
          "redux",
          "express",
          "nodejs",
          "bootstrap",
          "jquery",
          "apollo",
          "mongodb",
          "jwt",
        ],
        github: "https://github.com/hmhtom/NAS-Centre",
        imgURL: "nas-centre",
      },
      {
        type: [
          "handlebars",
          "materialize",
          "express",
          "nodejs",
          "jquery",
          "mysql",
          "sequelize",
        ],
        github: "https://github.com/hmhtom/tech-event-planner",
        imgURL: "tech-event-planner",
      },
      {
        type: [
          "react",
          "redux",
          "express",
          "nodejs",
          "apollo",
          "mongodb",
          "jwt",
        ],
        github: "https://github.com/hmhtom/e-commerce-platform",
        imgURL: "e-commerce-platform",
      },
      {
        type: [
          "react",
          "redux",
          "express",
          "nodejs",
          "apollo",
          "mongodb",
          "jwt",
        ],
        github: "https://github.com/hmhtom/book-search-engine",
        imgURL: "book-search-engine",
      },
    ],
  },
  reducers: {
    changeTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { changeTab } = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
