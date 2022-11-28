import React, { useState } from "react";
import {
  Toolbar,
  AppBar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: 20,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          ADYLSHAY
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge color="error" badgeContent={4}>
            <Mail />
          </Badge>
          <Badge color="error" badgeContent={2}>
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={(e) => setOpen(true)}>
            A
          </Avatar>
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} onClick={(e) => setOpen(true)}>
            A
          </Avatar>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
