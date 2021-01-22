/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'


const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl={`${window.location.origin}/about`}
        cancelUrl={`${window.location.origin}/404`}
        currency="USD"
        allowedCountries={["US", "GB", "CA"]}
        billingAddressCollection={true}
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `100%`,
            overflow: `hidden`,
          }}
        >
          <main>{children}</main>
        </div>
      </CartProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
