

// // /* eslint-disable react-refresh/only-export-components */
// import Toast from "../toastMssg/Toast";
// // If this is your context file:
// import { createContext, useContext, useState } from 'react';

// const SignInContext = createContext();

// export const ContextProvider = ({ children }) => {
//     const [state, setState] = useState(undefined);

//     return (
//         <SignInContext.Provider value={{ state, setState }}>
//             {state&& (
//                 <Toast
                
//                 meassge={state?.meassge}
//                 type={state?.type}
//                 onClose={() => setState(undefined)}
//                 />
//             ) }
//             {children}
//         </SignInContext.Provider>
//     );
// };

// export const useContextProvider = () => {
//     return useContext(SignInContext);
// };

// // Add default export
// export default useContextProvider;
