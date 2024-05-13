import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabContainer } from '@extjs/ext-react';

export default class TabbedInterface extends React.Component {

  render() {
    const { tabs } = this.props;

    return (
      <Tabs>
        {tabs.map((tab, index) => (
          <TabContainer key={index}>
            <Tab label={tab.label}>
              {tab.content}
            </Tab>
          </TabContainer>
        ))}
      </Tabs>
    );
  }
}

TabbedInterface.propTypes = {
  tabs: PropTypes.array.isRequired
};

//# sourceMappingURL=TabbedInterface.js.map

