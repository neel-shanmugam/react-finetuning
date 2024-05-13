import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import { closeModal } from '../../../actions/modal';

const ModalDialog = ({ children, isOpen, onClose, ...props }) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    {...props}
  >
    <Modal.Content>
      {children}
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onClose}>
        Close
      </Button>
    </Modal.Actions>
  </Modal>
);

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
});

export default connect(mapStateToProps, { closeModal })(ModalDialog);

//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//# sourceMappingURL=ModalDialog.js.map
//