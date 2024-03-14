import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import { Tchildren } from './Layout/app/Types'
import ToastProvider from './lib/ToastProvider'
function ProviderContainer({children}:Tchildren) {

  return (
 <BrowserRouter basename='/'>
     
        {/* <ReduxT> */}
     <QueryProvider>
        <ToastProvider>
             {children}
        </ToastProvider>
    </QueryProvider>
    {/* </ReduxT> */}
</BrowserRouter>
    )
}

export default ProviderContainer