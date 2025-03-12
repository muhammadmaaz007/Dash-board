import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AspectRatio from '@mui/joy/AspectRatio';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Stack from '@mui/joy/Stack';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import Switch from '@mui/joy/Switch';
import TuneIcon from '@mui/icons-material/TuneRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import Done from '@mui/icons-material/Done';
import ListIcon from '@mui/icons-material/List';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Guesthouse');
  const [amenities, setAmenities] = React.useState([0, 6]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: "white" }}
          >
           <Button
        variant="outlined"
        color="neutral"
        startDecorator={<ListIcon />}
        onClick={() => setOpen(true)}
      >

      </Button>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
     <Drawer
     size="md"
     variant="plain"
     open={open}
     onClose={() => setOpen(false)}
     slotProps={{
       content: {
         sx: {
           bgcolor: 'transparent',
           p: { md: 3, sm: 0 },
           boxShadow: 'none',
         },
       },
     }}
   >
     <Sheet
       sx={{
         borderRadius: 'md',
         p: 2,
         display: 'flex',
         flexDirection: 'column',
         gap: 2,
         height: '100%',
         overflow: 'auto',
       }}
     >
       <DialogTitle>Filters</DialogTitle>
       <ModalClose />
       <Divider sx={{ mt: 'auto' }} />
       <DialogContent sx={{ gap: 2 }}>
         <FormControl>
           <FormLabel sx={{ typography: 'title-md', fontWeight: 'bold' }}>
             Property type
           </FormLabel>
           <RadioGroup
             value={type || ''}
             onChange={(event) => {
               setType(event.target.value);
             }}
           >
             <Box
               sx={{
                 display: 'grid',
                 gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                 gap: 1.5,
               }}
             >
               {[
                 {
                   name: 'House',
                   icon: <HomeRoundedIcon />,
                 },
                 {
                   name: 'Apartment',
                   icon: <ApartmentRoundedIcon />,
                 },
                 {
                   name: 'Guesthouse',
                   icon: <MeetingRoomRoundedIcon />,
                 },
                 {
                   name: 'Hotel',
                   icon: <HotelRoundedIcon />,
                 },
               ].map((item) => (
                 <Card
                   key={item.name}
                   sx={{
                     boxShadow: 'none',
                     '&:hover': { bgcolor: 'background.level1' },
                   }}
                 >
                   <CardContent>
                     {item.icon}
                     <Typography level="title-md">{item.name}</Typography>
                   </CardContent>
                   <Radio
                     disableIcon
                     overlay
                     checked={type === item.name}
                     variant="outlined"
                     color="neutral"
                     value={item.name}
                     sx={{ mt: -2 }}
                     slotProps={{
                       action: {
                         sx: {
                           ...(type === item.name && {
                             borderWidth: 2,
                             borderColor:
                               'var(--joy-palette-primary-outlinedBorder)',
                           }),
                           '&:hover': {
                             bgcolor: 'transparent',
                           },
                         },
                       },
                     }}
                   />
                 </Card>
               ))}
             </Box>
           </RadioGroup>
         </FormControl>

         <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 1 }}>
           Amenities
         </Typography>
         <div role="group" aria-labelledby="rank">
           <List
             orientation="horizontal"
             size="sm"
             sx={{ '--List-gap': '12px', '--ListItem-radius': '20px' }}
           >
             {['Wi-fi', 'Washer', 'A/C', 'Kitchen'].map((item, index) => {
               const selected = amenities.includes(index);
               return (
                 <ListItem key={item}>
                   <AspectRatio
                     variant={selected ? 'solid' : 'outlined'}
                     color={selected ? 'primary' : 'neutral'}
                     ratio={1}
                     sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
                   >
                     <div>{selected && <Done fontSize="md" />}</div>
                   </AspectRatio>
                   <Checkbox
                     size="sm"
                     color="neutral"
                     disableIcon
                     overlay
                     label={item}
                     variant="outlined"
                     checked={selected}
                     onChange={(event) =>
                       setAmenities((prev) => {
                         const set = new Set([...prev, index]);
                         if (!event.target.checked) {
                           set.delete(index);
                         }

                         return [...set];
                       })
                     }
                     slotProps={{
                       action: {
                         sx: {
                           '&:hover': {
                             bgcolor: 'transparent',
                           },
                         },
                       },
                     }}
                   />
                 </ListItem>
               );
             })}
           </List>
         </div>

         <Typography level="title-md" sx={{ fontWeight: 'bold', mt: 2 }}>
           Booking options
         </Typography>
         <FormControl orientation="horizontal">
           <Box sx={{ flex: 1, pr: 1 }}>
             <FormLabel sx={{ typography: 'title-sm' }}>
               Instant booking
             </FormLabel>
             <FormHelperText sx={{ typography: 'body-sm' }}>
               Listings that you can book without waiting for host approval.
             </FormHelperText>
           </Box>
           <Switch />
         </FormControl>

         <FormControl orientation="horizontal">
           <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
             <FormLabel sx={{ typography: 'title-sm' }}>Self check-in</FormLabel>
             <FormHelperText sx={{ typography: 'body-sm' }}>
               Easy access to the property when you arrive.
             </FormHelperText>
           </Box>
           <Switch />
         </FormControl>
       </DialogContent>

       <Divider sx={{ mt: 'auto' }} />
       <Stack
         direction="row"
         useFlexGap
         spacing={1}
         sx={{ justifyContent: 'space-between' }}
       >
         <Button
           variant="outlined"
           color="neutral"
           onClick={() => {
             setType('');
             setAmenities([]);
           }}
         >
           Clear
         </Button>
         <Button onClick={() => setOpen(false)}>Show 165 properties</Button>
       </Stack>
     </Sheet>
   </Drawer>
 </React.Fragment>

  );
}