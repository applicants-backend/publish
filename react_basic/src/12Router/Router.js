// import {
//   //   BrowserRouter,
//   //   Routes,
//   //   Route,
//   createBrowserRouter,
// } from "react-router-dom";
// import Header from "./Header";
// import About from "./About";
// import Home from "./Home";
// import User from "./User";
// import Redirect from "./Redirect";
// import UserDetail from "./UserDetail";
// import NotFound from "./404";
// import Root from "./Root";
// import App from "../App";
// import Comment from "./Comment";

// Version 1

// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/redirect" element={<Redirect />} />
//           <Route path="/user/:userId" element={<UserDetail />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// Version2
// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         errorElement: <NotFound />,
//       },
//       {
//         path: "about",
//         element: <About />,
//         errorElement: <NotFound />,
//       },
//       {
//         path: "redirect",
//         element: <Redirect />,
//         errorElement: <NotFound />,
//       },
//     ],
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/user",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <User />,
//       },
//       {
//         path: ":userId",
//         element: <UserDetail />,
//         children: [
//           {
//             path: "comment",
//             element: <Comment />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// export default Router;
