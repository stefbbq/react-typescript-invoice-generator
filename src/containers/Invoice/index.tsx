import React, { Component } from "react";

// Local
import InvoiceHeader from "../../components/InvoiceHeader";
import InvoiceFooter from "../../components/InvoiceFooter";
import LineItem from "../../components/LineItem";
import AddLineItem from "../../components/AddLineItem";
import { ILineItem } from "../../types/ILineItem";
import initialState from "./initialState";
import styles from "./styles.module.scss";

// Class Interfaces
interface Props {}
interface State {
  lineItems: ILineItem[];
}

export default class Invoice extends Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = { lineItems: initialState };
  }

  private addLineItem = (lineItem: ILineItem) => {
    let updatedLineItems = [...this.state.lineItems];
    updatedLineItems.push(lineItem);
    this.setState({
      lineItems: updatedLineItems,
    });
  };

  private removeLineItem = (index: number) => {
    let updatedLineItems = [...this.state.lineItems];
    updatedLineItems.splice(index, 1);
    this.setState({
      lineItems: updatedLineItems,
    });
  };

  private getSubtotal = () => {
    return this.state.lineItems.reduce((total: number, target: ILineItem): number => {
      return total + target.total;
    }, 0);
  };

  render() {
    return (
      <section className={styles.container}>
        <InvoiceHeader number={2045} description="Lorem ipsum dolor sir amet." />
        <table>
          <thead className="me">
            <tr>
              <td className={styles.tableDescription}>Description</td>
              <td className="numberCell">Rate</td>
              <td className="numberCell quantityCell">#</td>
              <td className="numberCell">Total</td>
            </tr>
          </thead>
          <tbody>
            {this.state.lineItems.length &&
              this.state.lineItems.map((d, index) => {
                return (
                  <LineItem
                    key={index}
                    id={index}
                    description={d.description}
                    rate={d.rate}
                    quantity={d.quantity}
                    total={d.total}
                    onRemove={this.removeLineItem}
                  />
                );
              })}
            <AddLineItem onAdd={this.addLineItem} />
          </tbody>
        </table>
        <InvoiceFooter subtotal={this.getSubtotal()} deductions={30} />
      </section>
    );
  }
}
