import React from "react";
import RemoveCircleOutline from "@material-ui/icons/RemoveCircleOutline";

// Local
import ActionButton from "../ActionButton";
import styles from "./styles.module.scss";

const LineItem = (props: any) => {
  const onRemove = () => props.onRemove(props.id);

  return (
    <tr className={styles.lineItem}>
      <td>{props.description}</td>
      <td className="numberCell">${props.rate}</td>
      <td className="numberCell quantityCell">{props.quantity}</td>
      <td className="numberCell">${props.total}</td>
      {props.onRemove && (
        <td className="action">
          <div onClick={onRemove}>
            <ActionButton icon={RemoveCircleOutline} />
          </div>
        </td>
      )}
    </tr>
  );
};

export default LineItem;
