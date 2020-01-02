import React from "react";

// Local
import styles from "./styles.module.scss";

interface Props {
  subtotal: number;
  deductions: number;
}

const InvoiceFooter = (props: Props) => {
  const getTaxes = () => Math.round((props.subtotal - props.deductions) * 0.13);
  const getTotal = () => Math.round(props.subtotal - props.deductions + getTaxes());
  return (
    <footer className={styles.container}>
      <span>
        <b>Sub-total: </b>${props.subtotal}
      </span>
      <span>
        <b>Deductions:</b> ${props.deductions}
      </span>
      <span>
        <b>Taxes:</b> ${getTaxes()}
      </span>
      <span>
        <b>Total:</b> ${getTotal()}
      </span>
    </footer>
  );
};

export default InvoiceFooter;
