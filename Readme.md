1.  npm init
2.  git init
3.  npm i parcel
4.  npx parcel index.html
5.  import React from "react";
    import { createRoot } from "react-dom/client";

           const heading = <h1>Hello world</h1>

           const root = createRoot(document.getElementById("root"));

           root.render(heading);

6.  scripts start : parcel index.html
7.  Installed tailwindcss
8.  npm install react-router-dom@6
9.  react-router-dom@6 ✅ → stable + Parcel compatible

react-router-dom@7 ❌ → uses react-router/dom (Parcel issue)
