import { PaginationProps } from '@/app/interfaces/interfaces';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';


const PaginationComponent: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Stack spacing={2} sx={{ alignItems: 'center', marginTop: '20px' }}>
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={onPageChange}
      sx={{
        '& .MuiPaginationItem-root': {
          fontSize: '20px',
        },
      }}
    />
  </Stack>
  );
};

export default PaginationComponent;
