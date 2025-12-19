// // 'use client'

// // import React, { createContext, useContext, useEffect, useState } from 'react'

// // const LocaleContext = createContext(undefined)

// // export function LocaleProvider({ children }) {
// //   const [isUK, setIsUK] = useState(() => {
// //     if (typeof window !== 'undefined') {
// //       return localStorage.getItem('isUK') === 'true'
// //     }
// //     return false
// //   })
// //   useEffect(() => {
// //     localStorage.setItem('isUK', String(isUK))
// //   }, [isUK])

// //   const toggleLocale = () => {
// //     setIsUK((prev) => !prev)
// //   }

// //   return (
// //     <LocaleContext.Provider value={{ isUK, toggleLocale }}>
// //       {children}
// //     </LocaleContext.Provider>
// //   )
// // }
// // export function useLocale() {
// //   const context = useContext(LocaleContext)
// //   // if (!context) {
// //   //   throw new Error('setIsUK')
// //   // }
// //   return context
// // }
// 'use client'

// import React, { createContext, useContext, useEffect, useState } from 'react'

// const LocaleContext = createContext(undefined)

// export function LocaleProvider({ children }) {
//   const [isUK, setIsUK] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('isUK') === 'true'
//     }
//     return false
//   })

//   useEffect(() => {
//     localStorage.setItem('isUK', String(isUK))
//   }, [isUK])

//   const toggleLocale = () => {
//     setIsUK((prev) => !prev)
//   }

//   return (
//     <LocaleContext.Provider value={{ isUK, toggleLocale }}>
//       {children}
//     </LocaleContext.Provider>
//   )
// }

// export function useLocale() {
//   const context = useContext(LocaleContext)
//   if (!context) {
//     throw new Error('useLocale must be used inside a LocaleProvider')
//   }
//   return context
// }
'use client'

import React, { createContext, useContext } from 'react'

const LocaleContext = createContext({ isUK: false })

export function LocaleProvider({ children }) {
  // 🔒 NZ locked in
  const isUK = false

  return (
    <LocaleContext.Provider value={{ isUK }}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
