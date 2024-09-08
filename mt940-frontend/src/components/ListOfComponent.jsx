import React, { useEffect, useState } from "react";
import axios from "axios";

const ListOfComponent = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/transactions"); // API'den verileri çek
        setTransactions(response.data); // Çekilen verileri state'e kaydet
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchData(); // Verileri çek
  }, []); // Boş bağımlılık dizisi, yalnızca bileşen ilk yüklendiğinde çalışır

  return (
    <div>
      <h2>List Of Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Bank Code</th>
            <th>Batch Id</th>
            <th>Account Id</th>
            <th>Transaction Amount</th>
            <th>Transaction Description</th>
            <th>Closing Available Balance</th>
            <th>Closing Balance</th>
            <th>Forward Available Balance</th>
            <th>Opening Balance</th>
            <th>Statement Number</th>
            <th>Transaction Date</th>
            <th>Transaction Reference Number</th>
            <th>Transaction Type</th>
            <th>Sender</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.bank_code}</td>
              <td>{transaction.batch_id}</td>
              <td>{transaction.account_identification}</td>
              <td>{transaction.transaction_amount.toFixed(2)}</td>
              <td>{transaction.transaction_details}</td>
              <td>{transaction.closing_available_balance}</td>
              <td>{transaction.closing_balance.toFixed(2)}</td>
              <td>{transaction.forward_available_balance}</td>
              <td>{transaction.opening_balance.toFixed(2)}</td>
              <td>{transaction.statement_number}</td>
              <td>
                {transaction.transaction_date
                  ? new Date(transaction.transaction_date).toLocaleDateString()
                  : "N/A"}
              </td>
              <td>{transaction.transaction_reference_number}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.sender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfComponent;
