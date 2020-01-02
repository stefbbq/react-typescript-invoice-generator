import React, { Component } from "react";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";

// Local
import { ILineItem } from "../../types/ILineItem";
import ActionButton from "../ActionButton";
import initialState from "./initialState";
import styles from "./styles.module.scss";

interface Props {
  onAdd: Function;
}

class AddLineItem extends Component<Props, ILineItem> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  private defaultState = () => {
    this.setState(initialState);
  };

  private getTotal = (): number => this.state.quantity * this.state.rate;

  private onChange = (e: any) => {
    e.persist();

    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  private onSubmit = () => {
    this.props.onAdd({ ...this.state, total: this.getTotal() });
    this.defaultState();
  };

  render() {
    return (
      <>
        <tr>
          <td>
            <div className={styles.headingText}>Add new item:</div>
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              type="string"
              value={this.state.description}
              onChange={this.onChange}
              className={styles.descriptionField}
              margin="dense"
            />
            <div className={styles.fieldsContainer}>
              <div className={styles.numberField}>
                <TextField
                  name="rate"
                  label="Rate"
                  variant="outlined"
                  type="number"
                  value={this.state.rate}
                  onChange={this.onChange}
                  margin="dense"
                />
              </div>
              <div className={styles.numberField}>
                <TextField
                  name="quantity"
                  label="Quantity"
                  variant="outlined"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.onChange}
                  margin="dense"
                />
              </div>
            </div>
          </td>
          <td>
            <div className="action" onClick={this.onSubmit}>
              <ActionButton icon={AddCircleOutline} />
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default AddLineItem;
