import React, { useEffect, useState } from "react";
import { listTransactions } from "../services/TransactionService";

const ListOfComponent = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    listTransactions()
      .then((response) => {
        console.log(response.data); // API'den gelen verileri konsolda göster
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  return (
    <div className="container">
      {/* <h2 className="text-center">List Of Transactions</h2> */}
      <table className="table" border = "1">
        <thead className="thead-dark">
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
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.bankCode || "N/A"}</td>
                <td>{transaction.batchId || "N/A"}</td>
                <td>{transaction.accountIdentification || "N/A"}</td>
                <td>
                  {transaction.transactionAmount
                    ? transaction.transactionAmount.toFixed(2)
                    : "N/A"}
                </td>
                <td>{transaction.transactionDetails || "N/A"}</td>
                <td>
                  {transaction.closingAvailableBalance
                    ? transaction.closingAvailableBalance
                    : "N/A"}
                </td>
                <td>
                  {transaction.closingBalance
                    ? transaction.closingBalance.toFixed(2)
                    : "N/A"}
                </td>
                <td>{transaction.forwardAvailableBalance || "N/A"}</td>
                <td>
                  {transaction.openingBalance
                    ? transaction.openingBalance.toFixed(2)
                    : "N/A"}
                </td>
                <td>{transaction.statementNumber || "N/A"}</td>
                <td>
                  {transaction.transactionDate
                    ? new Date(transaction.transactionDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>{transaction.transactionReferenceNumber || "N/A"}</td>
                <td>{transaction.transactionType || "N/A"}</td>
                <td>{transaction.sender || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="14" className="text-center">
                No transactions available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfComponent;
