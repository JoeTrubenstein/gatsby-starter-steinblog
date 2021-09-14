import * as React from "react"

const Layout = ({ children }) => {

  return (
    <div className="global-wrapper" data-is-root-path={"isRootPath"}>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
