import { Feedback } from './Feedback/Feedback';
import { Box } from './Box';

export const App = () => {
  return (
    <Box as={'main'} width="1024px" mx="auto" bg="#63c6c6" p="20px">
      <Feedback />
    </Box>
  );
};
