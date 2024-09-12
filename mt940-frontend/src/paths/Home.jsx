import React from "react";
import ListOfComponent from "../components/ListOfComponent";
import { listTransactions } from "../services/TransactionService";

const Home = () => {
  return (
    <div>
      <ListOfComponent fetchTransactions={listTransactions} />
    </div>
  );
};

export default Home;
