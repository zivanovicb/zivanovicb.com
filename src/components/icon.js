import React from "react"
import PropTypes from "prop-types"
import TechstackSeparator from "../icons/techstackSeparator"

const Icon = ({ name, width, height, className }) => {
  switch (name) {
    case "techstackSeparator":
      return (
        <TechstackSeparator
          width={width}
          height={height}
          className={className}
        />
      )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
}

export default Icon
