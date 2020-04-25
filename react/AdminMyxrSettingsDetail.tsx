import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Layout, PageBlock, PageHeader, Toggle } from "vtex.styleguide";
import Detail from "./Detail";

import "./styles.global.css";

class AdminMyxrSettingsDetail extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      checked: true
    }
  }
  public render() {
    const { checked }: any = this.state
    return (
      <Layout
        pageHeader={
          <PageHeader
            title="Page title fullwidth"
            linkLabel="Back">
            <Toggle
              label={checked ? "Activated" : "Deactivated"}
              semantic
              checked={checked}
              onChange={(e: any) => this.setState((prevState: any) => ({ checked: !prevState.checked }))}
            />
          </PageHeader>
        }>
        <PageBlock variation="full">
          <Detail />
        </PageBlock>
      </Layout>
    );
  }
}

export default AdminMyxrSettingsDetail;
