export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    maxWidth: '1200px',
    margin: '32px auto',
    display: 'flex',
    gap: '32px'
  },
  cartAndSummary: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    flex: 1
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '16px',
    marginBottom: '16px'
  },
  itemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '16px'
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  button: {
    backgroundColor: '#edf2f7',
    border: 'none',
    padding: '8px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  totalAndSummary: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  proceedButton: {
    backgroundColor: '#ecc94b',
    color: '#1a202c',
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.15s'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    background: 'white',
    padding: '32px',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%'
  },
  closeButton: {
    backgroundColor: '#3182ce',
    color: 'white',
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    transition: 'background-color 0.15s'
  }
};
