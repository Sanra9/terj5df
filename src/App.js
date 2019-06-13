import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.createGuest = this.createGuest.bind(this)
    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.state={
      list: [],
      firstName: '',
      lastName: ''
    }
  }

  updateFirstName(event){
    this.setState({
      firstName: event.target.value
    })
  }

  updateLastName(event){
    this.setState({
      lastName: event.target.value
    })
  }

  createGuest(event){
    event.preventDefault()
    this.setState({
      list: this.state.list.concat({firstName: this.state.firstName, lastName: this.state.lastName}),
      firstName: '',
      lastName: ''

    })
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.createGuest}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" onChange={this.updateFirstName} value={this.state.firstName} name="first-name"  />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" onChange={this.updateLastName} value={this.state.lastName}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((guest, k) => 
                  <tr>
                    <td key={k}>{guest.firstName}</td>
                    <td key={k}>{guest.lastName}</td>
                  </tr>
                  )}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


