import React, { useState } from 'react';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetcher = (route) => {
    setLoading(true);
    fetch(`http://localhost:5000/${route}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", margin: "20px", gap: "10px", float: "right" }}>
        <button style={{ backgroundColor: "#f48fb1", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }} onClick={() => fetcher("1")}>Page 1</button>
        <button style={{ backgroundColor: "#90caf9", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }} onClick={() => fetcher("2")}>Page 2</button>
        <button style={{ backgroundColor: "#f6a5c0", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }} onClick={() => fetcher("3")}>Page 3</button>
        <button style={{ backgroundColor: "#a5d6a7", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }} onClick={() => fetcher("4")}>Page 4</button>
        <button style={{ backgroundColor: "#ffe082", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }} onClick={() => fetcher("5")}>Page 5</button>
      </div>

      <table style={{ margin: "20px", borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#d1c4e9", color: "#311b92" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#d1c4e9", color: "#311b92" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#d1c4e9", color: "#311b92" }}>Gender</th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#d1c4e9", color: "#311b92" }}>Email</th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#d1c4e9", color: "#311b92" }}>Income</th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#d1c4e9", color: "#311b92" }}>City</th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#d1c4e9", color: "#311b92" }}>Phone Price</th>
            <th style={{ border: "1px solid black", padding: "10px", backgroundColor: "#d1c4e9", color: "#311b92" }}>Car Brand</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", backgroundColor: "#ffe0b2", color: "#f57c00", padding: "10px" }}>Loading...</td>
            </tr>
          )}
          {!loading && users.map(user => (
            <tr key={user.id}>
              <td style={{ border: "1px solid black", padding: "10px", backgroundColor: "#ede7f6", color: "#673ab7" }}>{user.id}</td>
              <td style={{ border: "1px solid black", padding: "10px", backgroundColor: "#ede7f6", color: "#673ab7" }}>{user.first_name} {user.last_name}</td>
              <td style={{ border: "1px solid black", padding: "10px", backgroundColor: "#ede7f6", color: "#673ab7" }}>{user.gender}</td>
              <td style={{ border: "1px solid black", padding: "10px", backgroundColor: "#ede7f6", color: "#673ab7" }}>{user.email}</td>
              <td style={{ border: "1px solid black", padding: "10px", backgroundColor: "#ede7f6", color: "#673ab7" }}>{user.income}</td>
              <td style={{ border: "1px solid black", padding: "10px", backgroundColor: "#ede7f6", color: "#673ab7" }}>{user.city}</td>
              <td style={{ border: "1px solid black", padding: "10px", backgroundColor: "#ede7f6", color: "#673ab7" }}>{user.phone_price}</td>
              <td style={{ border: "1px solid black", padding: "10px", backgroundColor: "#ede7f6", color: "#673ab7" }}>{user.car}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UsersTable;