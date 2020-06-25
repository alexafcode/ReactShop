import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ProductFilter, ProductItem } from ".";
import { PhonesType } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      // backgroundColor: theme.palette.background.default,
    },
  })
);

const phones: Array<PhonesType> = [
  {
    id: 1,
    manufacturer: "Apple",
    phone_name: "Iphone 11 128Gb",
    cpu_name: "A13 Bionic",
    cpu_core: 6,
    ram: 4,
    sim: 1,
    screen_width: 1792,
    screen_height: 828,
    screen_size: 6.1,
    resolution: 326,
    rom: 128,
    camera: 2,
    battery: 3110,
    os: "IOS 13",
    rating: 4.5,
    image: "",
    image_preview:
      "https://c.dns-shop.ru/thumb/st1/fit/200/200/c018912d74506197d8e862e91b6cc0c2/fbbf85ca9eb207ceaef8e3013c8356886d96ae84d5594db294104d625ca37e8d.jpg",
    image_large: "",
    price: 499,
  },
];

const ProductList: React.FC = () => {
  const classes = useStyles();

  const productsItems = phones.map((phones: PhonesType) => (
    <ProductItem key={phone.id} phone={phone} />
  ));

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={11} sm={2}>
          <ProductFilter />
        </Grid>
        <Grid item xs={12} sm={9}>
          {productsItems}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
