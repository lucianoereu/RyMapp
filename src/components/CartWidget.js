import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const Cart= () => {
    
    return (
    <>  
            <Badge badgeContent={3} color='secondary'>
        <ShoppingCartCheckoutIcon/>
            </Badge>
    </>
    );
}

export default Cart;

