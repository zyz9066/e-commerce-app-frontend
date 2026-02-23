import { Link } from "react-router-dom";

import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountCircle, Mail, Menu, MoreVert, Notifications, Search, ShoppingCart } from "@mui/icons-material";


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>
                <Typography
                    variant="h6"
                    to="/"
                    component={Link}
                    sx={{ flexGrow: 1 }}
                >
                    E-commerce App
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="search"
                >
                    <Search />
                </IconButton>
                <IconButton size="large" aria-label="mail" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                <IconButton
                    component={Link}
                    size="large"
                    edge="end"
                    aria-label="cart"
                    color="inherit"
                    to="/cart"
                >
                    <Badge badgeContent={4} color="error">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <IconButton
                    component={Link}
                    size="large"
                    edge="end"
                    aria-label="account"
                    color="inherit"
                    to="/login"
                >
                    <AccountCircle />
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="more"
                    edge="end"
                    color="inherit"
                >
                    <MoreVert />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
