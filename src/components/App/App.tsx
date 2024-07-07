import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '../../router/router'

const App: FC = () => <RouterProvider router={router} />

export default App