import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // PropTypes import edildi
import "./ListOfComponent.css";

const ListOfComponent = ({
  fetchTransactions = () => Promise.resolve({ data: [] }),
}) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions()
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, [fetchTransactions]);

  ListOfComponent.propTypes = {
    fetchTransactions: PropTypes.func.isRequired,
  };

  return (
    <div className="container">
      <div className="table-wrapper">
        <table className="styled-table" border="2">
          <thead>
            <tr>
              <th>
                <big>
                  <b>Bank Code</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Action Date</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Batch Id</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Account Id</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Transaction Amount</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Transaction Description</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Closing Available Balance</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Closing Balance</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Closing Currency</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Forward Available Balance</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Opening Balance</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Opening Currency</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Statement Number</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Transaction Date</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Transaction Reference Number</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Transaction Type</b>
                </big>
              </th>
              <th>
                <big>
                  <b>Sender</b>
                </big>
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.bankCode || "N/A"}</td>
                  <td>{transaction.actionDate || "N/A"}</td>
                  <td>{transaction.batchId || "N/A"}</td>
                  <td>{transaction.accountIdentification || "N/A"}</td>
                  <td>
                    {transaction.transactionAmount
                      ? transaction.transactionAmount.toFixed(2)
                      : "N/A"}
                  </td>
                  <td>{transaction.transactionDetails || "N/A"}</td>
                  <td>{transaction.closingAvailableBalance || "N/A"}</td>
                  <td>
                    {transaction.closingBalance
                      ? transaction.closingBalance.toFixed(2)
                      : "N/A"}
                  </td>
                  <td>{transaction.closingCurrency || "N/A"}</td>
                  <td>{transaction.forwardAvailableBalance || "N/A"}</td>
                  <td>
                    {transaction.openingBalance
                      ? transaction.openingBalance.toFixed(2)
                      : "N/A"}
                  </td>
                  <td>{transaction.openingCurrency || "N/A"}</td>
                  <td>{transaction.statementNumber || "N/A"}</td>
                  <td>
                    {transaction.transactionDate
                      ? new Date(
                          transaction.transactionDate
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>{transaction.transactionReferenceNumber || "N/A"}</td>
                  <td>{transaction.transactionType || "N/A"}</td>
                  <td>{transaction.sender || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="17" className="text-center">
                  No transactions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfComponent;
