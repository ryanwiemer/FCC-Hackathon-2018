import React from 'react'
import styled from 'styled-components'

export default props => {

  setTimeout( // after 3s
    function() {
        this.props.handleLottery(); // go to next round
    }
    .bind(this),
    3000
  );

  if (props.result === 'success') {

    return (<View>
      <Heading>Congratulations!</Heading>
    </View>)

  } else if (props.result === 'fail') {

    return (<View>
      <Heading>You suck!</Heading>
    </View>)

  } else {

    return (<View>
      <Heading>Time's up!</Heading>
      </View>)
  }

}

const View = styled.div`

`

const Heading = styled.h1`

`
