import "./App.css";
import React, { useState } from "react";

//* Main Parent Component
function App() {
  let [currentUser, setCurrentUser] = useState(null);
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ backgroundColor: "lightgray" }}>
        <Header />
      </div>
      <div style={{ flex: 1 }}>
        {currentUser ? (
          <Dashboard user={currentUser} />
        ) : (
          <LoginScreen onLogin={() => setCurrentUser({ name: "John Doe" })} />
        )}
      </div>
      <div style={{ backgroundColor: "lightgray" }}>
        <Footer />
      </div>
    </div>
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

function Dashboard({ user }) {
  return (
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav />
      <DashboardContent user={user} />
    </div>
  );
}

function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  );
}

function DashboardContent({ user }) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage user={user} />
    </div>
  );
}

function WelcomeMessage({ user }) {
  return <div>Welcome {user.name}</div>;
}

function Footer() {
  return <div>Footer</div>;
}
export default App;
