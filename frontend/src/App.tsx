import { routeTree } from './routeTree.gen';
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Toaster } from 'sonner';


const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const App = () => {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

