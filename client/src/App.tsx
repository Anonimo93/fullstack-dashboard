import { useEffect, useState } from "react";

type DashboardData = {
  users: number;
  revenue: number;
  orders: number;
  growth: number;
};

function App() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/dashboard")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Dashboard</h1>
      {data ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          <Card label="Users" value={data.users.toLocaleString()} />
          <Card label="Revenue" value={`$${data.revenue.toLocaleString()}`} />
          <Card label="Orders" value={data.orders.toLocaleString()} />
          <Card label="Growth" value={`${data.growth}%`} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
      <div style={{ fontSize: 14, color: "#666" }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: "bold" }}>{value}</div>
    </div>
  );
}

export default App;
