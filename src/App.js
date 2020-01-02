import React, { Component } from "react";

// Local
import Logo from "./components/Logo";
import Invoice from "./containers/Invoice";
import "./scss/core.scss";
import styles from "./styles.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Logo />
        <Invoice />
      </div>
    );
  }
}

export default App;
