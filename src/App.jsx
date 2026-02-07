import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import FloatingActions from "./components/common/FloatingActions";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <FloatingActions /> {/* NEW: Floating Actions */}
    </BrowserRouter>
  );
}

export default App;
