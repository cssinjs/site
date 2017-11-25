import React, {PropTypes} from 'react'
import cn from 'classnames'
import injectSheet from 'common/utils/jss'

const styles = theme => ({
  title: {
    color: theme.textColorLight,
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 32,
    textTransform: 'uppercase',
    letterSpacing: 1,
    margin: [0, 0, 40]
  },
  inverse: {
    color: theme.textColorDark
  }
})

const Title = ({children, inverse, className, classes}) => (
  <h2 className={cn(className, classes.title, {[classes.inverse]: inverse})}>
    {children}
  </h2>
)

Title.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  inverse: PropTypes.bool,
  className: PropTypes.string
}

Title.defaultProps = {
  inverse: false,
  className: null
}

export default injectSheet(styles)(Title)
