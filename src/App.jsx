// App.js
import { Outlet } from "react-router-dom"; // For rendering child routes

function App() {
  return (
    <div>
      {/* Main layout handles the Navbar and renders the appropriate page */}
      <Outlet />
    </div>
  );
}

export default App;
