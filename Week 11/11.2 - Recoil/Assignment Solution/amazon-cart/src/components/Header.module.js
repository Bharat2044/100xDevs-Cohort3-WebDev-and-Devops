const styles = {
  header: {
    backgroundColor: '#232f3e',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },
  cartIcon: {
    position: 'relative',
    marginLeft: '10px',
  },
  cartLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  cartCount: {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: '#ff9900',
    borderRadius: '50%',
    padding: '2px 5px',
    fontSize: '12px',
    color: '#000',
  },
};

export default styles;
