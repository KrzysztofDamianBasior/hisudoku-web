import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return <Link to="/">Home</Link>;
}

// mutation name($variable: String!){
//   mutationName(email: $variable)
// }
// const [mutation, {loading, error}] = useMutation( MUTATION, {
//   refetchQueries: [{query: ....}]

//   onCompleted: data => {
//       localStorage.setItem('token', data.signUp)
//       client.writeData({data: {isLoggedIn: true}})
//       //przekierowanie na inną stronę
//   }
// } )

// tooltip    tippy.js-react
// yarn add '@tiippy.js/react'

// import Tippy from '@tippy.js/react'
// import 'tippy.js/dist/tippy.css'

//     <Tippy arrow={false} delay={1000} placement='right' content="content on button hover">
//         <button>Hover</button>
//     </Tippy>

// content prop accepts html and components
// content={<span={{color: 'orange'}}>Colored</span>}
// content={<ColoredTooltip></CooloredTooltip>}

// CUSTOM CHILD
// import {forwardRef} from 'react'
// const CustomChild = forwardRef(
//     (props,ref) => {
//         return <div ref={ref}> </div>
//     }
//  )

// <Tippy content={}>
//     <CustomChild />
// </Tippy>
