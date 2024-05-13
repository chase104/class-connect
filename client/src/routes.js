import Homepage from "./pages/homepage/index.js";
import About from "./pages/about/index.js";
import Games from "./pages/games/index.js";
import Login from "./pages/login/index.js";
import Faq from "./pages/faq/index.js";
import Plans from "./pages/plans/index.js";
import Pdf from "./pages/pdf-practice/index.js";
import AdminDashboard from "./pages/dashboards/admin-dashboard/index.js";
import SuperDashboard from "./pages/dashboards/super-admin-dashboard/index.js";
import PdfPage from "./pages/pdf-page/index.js";
import Application from "./pages/application/index.js";
import Consultation from "./pages/consultation";

const routes = [
  { path: "/pdfpage", component: PdfPage, exact: true },
  { path: "/application", component: Application },
  { path: "/", component: Homepage, exact: true },
  { path: "/about", component: About },
  { path: "/consultation", component: Consultation },
  { path: "/games", component: Games },
  { path: "/login", component: Login },
  { path: "/faq", component: Faq },
  { path: "/plans", component: Plans },
  { path: "/pdf", component: Pdf },
  { path: "/admin-dash", component: AdminDashboard },
  { path: "/super-dash", component: SuperDashboard },
];

export default routes;
