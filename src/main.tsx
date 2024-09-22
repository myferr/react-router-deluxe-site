import { Router, Index } from "./router/router.ts";

import { App } from "./pages/App.tsx";
import { Documentation_Introduction } from "./pages/docs/documentation/getting-started/Introduction.tsx";

import "./styles/font.css";
import { Documentation_GettingStarted } from "./pages/docs/redirect/getting-started.tsx";
import { Documentation } from "./pages/docs/redirect/docs.tsx";
import { Documentation_Installation } from "./pages/docs/documentation/getting-started/Installation.tsx";

Index.Set(document.getElementById("root"), <App />);

Router.Render(
  document.getElementById("root"),
  Router.Routes({
    "/docs": <Documentation />,
    "/docs/getting-started": <Documentation_GettingStarted />,
    "/docs/getting-started/introduction": <Documentation_Introduction />,
    "/docs/getting-started/installation": <Documentation_Installation />,
  })
);
