export const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        maxWidth: '425px',
        width: '100%',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#000',
        position: 'relative',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: "#000"
    },
    content: {
        display: 'grid',
        gap: '1rem',

    },
    imageContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        alignItems: 'start',
    },
    image: {
        gridColumn: 'span 4',
        height: 'auto',
        width: '100%',
        borderRadius: '0.5rem',
        objectFit: 'cover',
    },
    details: {
        display: 'grid',
        gap: '0.5rem',
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    description: {
        fontSize: '0.875rem',
        color: '#a0a0a0',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '1rem',
    },
    addToCartButton: {
        width: '100%',
        padding: '8px',
        backgroundColor: '#fbbf24',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: '#1c1c1c',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        color: '#000',
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
    },
    star: {
        color: '#6b7280',
        fontSize: '1.25rem',
    },
    starFilled: {
        color: '#fbbf24',
    },
    reviewCount: {
        marginLeft: '0.5rem',
        fontSize: '0.875rem',
        color: '#a0a0a0',
    }
};

