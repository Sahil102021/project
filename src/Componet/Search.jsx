import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { FiX } from "react-icons/fi";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { sm: '400px', lg: '600px' },
  height: '400px',
  backgroundColor: '#ffffff9a',
  backdropFilter: 'blur(10px)',
  border: '1px solid #fff',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column', // You might want to change this if needed
};

function Search() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} >
        <SearchIcon sx={{ fontSize: { xs: '12px', sm: '16px' }, color: '#fff', '&:hover': { color: 'black' } }} />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {/* CLOSE ICON */}
          <Box sx={{display:'flex',justifyContent:'flex-end'}}>
          <IconButton onClick={handleClose}>
            <FiX />
          </IconButton>
          </Box>

            {/* SEARCH */}
            <Box>
              

              
            </Box>

        </Box>
      </Modal>
    </div>
  );
}

export default Search;
