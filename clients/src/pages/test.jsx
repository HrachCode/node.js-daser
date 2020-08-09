import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loader } from '../actions/action'


export const test = ({store,loader}) => {
    
  
    
    return (
        <div>
            <button onClick = {()=> loader(2)}>
                    {store}
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    store:state.reduser.store
})

const mapDispatchToProps = {
    loader,
}

export default connect(mapStateToProps, mapDispatchToProps)(test)
