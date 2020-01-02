import React from "react";

// Local
import styles from "./styles.module.scss";

interface Props {
  number: number;
  description: string;
}

const InvoiceHeader = (props: Props) => (
  <header className={styles.container}>
    <h1>Invoice #{props.number}</h1>
    <h3>{props.description}</h3>
  </header>
);

export default InvoiceHeader;
