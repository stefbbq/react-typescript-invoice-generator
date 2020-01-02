import React from "react";

// Local
import styles from "./styles.module.scss";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface Props {
  icon: React.ComponentType<SvgIconProps>;
}

const ActionButton = (props: Props) => {
  const Icon = props.icon;
  return (
    <div className={styles.actionButton}>
      <Icon />
    </div>
  );
};

export default ActionButton;
