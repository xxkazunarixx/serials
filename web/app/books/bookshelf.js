// @flow

import React from 'react'
import {Link} from 'react-router'
import {userBooks} from '../model/subscription'
import {SourceModel, isRecommended} from '../model/source'
import {SimpleGallery} from './gallery'
import {Suggestion} from '../books/support'
import {Routes, transitionTo} from '../router'
import {displayIf} from '../style'

export class Bookshelf extends React.Component {

  constructor() {
    this.state = {sources: []}
  }

  static load(params) {
    return {
      sources: userBooks(params.id),
      recommended: SourceModel.findRecommended()
    }
  }

  render():React.Element {
    var sources = (this.props.sources || [])
    var isEmpty = sources.length === 0

    if (isEmpty) {
      sources = this.props.recommended || []
    }

    return <div>
      <h3>My Books</h3>
        <p>Welcome to your bookshelf. The books you subscribe to will be shown here. <span style={displayIf(isEmpty, 'inline')}>Here are a few that we recommend: </span></p>
        <SimpleGallery sources={sources} />
        <div style={{marginTop: 15}}>
          <Link className="button expand" to={Routes.library}>
            <span className="fa fa-search"></span>
            <span> Find more books!</span>
          </Link>
        </div>
        <hr />
        <p><Suggestion /></p>
    </div>
  }
}

export class Instruction extends React.Component {
  render():React.Element {
    return <div>
      <h1>Welcome to Web Fiction!</h1>
      <div>This is your libarary. Your books will be here.  </div>
    </div>
  }
}
