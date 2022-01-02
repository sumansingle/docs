import React from "react"

const Container = ({ fluid, children, className, style }) => {
  return (
    <div
      className={`${
        fluid ? "w-11/12 max-w-screen-2xl mx-auto" : "full max-w-auto mx-0"
      } ${className || ""}`}
      style={style || {}}
    >
      {children}
    </div>
  )
}

export default Container
