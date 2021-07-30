import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@material-ui/core'
import useStyles from './styles'

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles()

    const handleUpdateCartQty = (item, newQuantity) => onUpdateCartQty(item, newQuantity);

    const handleRemoveFromCart = (item) => onRemoveFromCart(item);

    return (
       <Card>
           <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
           <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h4">{item.line_total.formatted_with_symbol}</Typography>
           </CardContent>
           <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=> handleUpdateCartQty(item.id, item.quantity -1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=> handleUpdateCartQty(item.id, item.quantity +1)}>+</Button>
                </div>    
                <Button variant="contained" type="button" color="secondary" onClick={()=> handleRemoveFromCart(item.id)}>Remove</Button>
           </CardActions>
       </Card>
    )
}

export default CartItem
