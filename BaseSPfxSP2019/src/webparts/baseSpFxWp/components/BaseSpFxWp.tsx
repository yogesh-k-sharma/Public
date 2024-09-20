import * as React from 'react';
import styles from './BaseSpFxWp.module.scss';
import { IBaseSpFxWpProps } from './IBaseSpFxWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from 'sp-pnp-js';
export default class BaseSpFxWp extends React.Component < IBaseSpFxWpProps, {} > {
  public render(): React.ReactElement<IBaseSpFxWpProps> {
    return(
      <div className = { styles.baseSpFxWp } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <div><button onClick={this.addItem}>Add/Update</button></div>
      </div>
    </div>
  </div>
      </div >
    );
  }
  addItem(e) {
    e.preventDefault();
    sp.web.lists.getByTitle("ListTitle1").items.add({
      Title: "title"
    });
  }
}
