import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "./store/actions/cart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Card = ({ product, children }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const classes = useStyles();

  const addProductToCart = (cart, product) => {
    dispatch(cartActions.Add(cart, product));
  };

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <Grid item>
            <Link to={`/product/${product.id_product}`}>
              <img
                width="140px"
                src={product.image}
                alt={product.name_product}
              />
            </Link>
            <Typography variant="h6">{children}</Typography>
            <Typography variant="subtitle1">
              R$ {product.price.toFixed(2)}
            </Typography>
          </Grid>

          <Button
            variant="contained"
            onClick={() => addProductToCart(cart, product)}
          >
            Adicionar
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
