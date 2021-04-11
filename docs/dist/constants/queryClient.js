import { QueryClient } from '../../_snowpack/pkg/react-query.js';

export const queryClient = new QueryClient({
  defaultOptions: {
    keepPreviousData: true,
  },
});
