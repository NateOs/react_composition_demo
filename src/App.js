import "./App.css";
import React, { useState } from "react";

//* Main Parent Component

let Context = React.createContext();

function App() {
  let [currentUser, setCurrentUser] = useState(null);
  return (
    <Context.Provider value={{ currentUser }}>
      <div
        className="App"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ backgroundColor: "lightgray" }}>
          <Header />
        </div>
        <div style={{ flex: 1 }}>
          {currentUser ? (
            <Dashboard />
          ) : (
            <LoginScreen onLogin={() => setCurrentUser({ name: "John Doe" })} />
          )}
        </div>
        <div style={{ backgroundColor: "lightgray" }}>
          <Footer />
        </div>
      </div>
    </Context.Provider>
  );
}

//* Children Components
function Header() {
  return <div>Header</div>;
}

function LoginScreen({ onLogin }) {
  return (
    <div>
      <h3>Please login</h3>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav />
      <DashboardContent />
    </div>
  );
}

function DashboardContent() {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage />
    </div>
  );
}

function WelcomeMessage() {
  let { currentUser } = React.useContext(Context);
  return <div>Welcome {currentUser.name}</div>;
}

function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  );
}

function Footer() {
  return <div>Footer</div>;
}
export default App;
