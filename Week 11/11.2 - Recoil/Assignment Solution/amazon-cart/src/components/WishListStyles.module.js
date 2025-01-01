export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '256px',
    borderRight: '1px solid #e5e5e5',
    padding: '16px',
  },
  sidebarItem: {
    backgroundColor: '#f3f4f6',
    padding: '8px',
    borderRadius: '4px',
  },
  content: {
    flex: 1,
    padding: '16px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '16px',
  },
  productCard: {
    border: '1px solid #e5e5e5',
    borderRadius: '4px',
    padding: '16px',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '192px',
    objectFit: 'cover',
    marginBottom: '8px',
  },
  quickViewButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '4%',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    opacity: 1,
    transition: 'opacity 0.3s',
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  productPrice: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  addToCartButton: {
    width: '100%',
    padding: '8px',
    backgroundColor: '#fbbf24',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
