import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/_global.scss";
import "./styles/_typography.scss";
import "./styles/_variables.scss";
import "./styles/_mixins.scss";
import "./styles/_scrollbar.scss";
import "./i18n/i18n";
import { RouterProvider, createHashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createHashRouter([
        {
          path: "/",
          element: <div />,
          children: [{ path: "japan", element: <div /> }],
        },
      ])}
    />
  </React.StrictMode>
);
