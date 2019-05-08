import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class DetailSection extends React.Component {
  render() {
    const { color, actionColor } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.title, { color }]}>{this.props.title}</Text>
          {this.props.action && (
            <TouchableOpacity style={styles.actionContainer} onPress={this.props.onPress}>
              <Text style={[styles.action, { color: actionColor }]}>{this.props.action}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View>
          {this.props.children}
        </View>
      </View>
    )
  }
}

DetailSection.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string,
  color: PropTypes.string,
  actionColor: PropTypes.string,
}

DetailSection.defaultProps = {
  color: '#000',
  actionColor: '#0068ff',
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionContainer: {
    marginLeft: 'auto',
  },
  action: {
    fontSize: 16,
  },
})
