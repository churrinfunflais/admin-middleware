import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Layout, PageBlock, PageHeader, Table } from "vtex.styleguide";
import Settings from "./Settings";

import "./styles.global.css";

class AdminMyxrSettings extends Component {
  public render() {
    return (
      <Layout
        pageHeader={
          <PageHeader
            title={<FormattedMessage id="myxr.settings-title" />}
          />
        }
      >
        <PageBlock variation="full">
          <Settings />
        </PageBlock>
      </Layout>
    );
  }
}

export default AdminMyxrSettings;
