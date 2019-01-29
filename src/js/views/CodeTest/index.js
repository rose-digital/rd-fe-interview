import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions as exampleActions } from '../../redux/modules/example'
import { exampleSelector } from '../../redux/selectors/exampleSelector'
// import { ExampleWithError } from '../../common/components/Example'
// import { ErrorBoundary } from '../../common/components/Utilities'

require('./index.scss')

const mapStateToProps = (state) => ({
  example: exampleSelector(state),
})

const mapDispatchToProps = {
  ...exampleActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class CodeTest extends Component {
  static propTypes = {
    example: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getAwesomeCode } = this.props

    getAwesomeCode()
  }

  render() {
    return (
      <div className="code-test">
        <h1 className="page-header">Welcome to the Danger Zone&trade; </h1>
      </div>
    )
  }
}

export default CodeTest
