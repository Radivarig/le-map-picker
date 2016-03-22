var React = require('react')
var WheelPicker = require('./WheelPicker.jsx')

var WheelPickerViewer = React.createClass({
  getInitialState() {
    items = [
      {src: this.getSrcPath('Dusk_Towers'),       name: 'Dusk Towers'},
      {src: this.getSrcPath('Orbital_Shipyard'),  name: 'Orbital Shipyard'},
      {src: this.getSrcPath('Prion_Terraces'),    name: 'Prion Terraces'},
      {src: this.getSrcPath('Ulrena'),            name: 'Ulrena'},
      {src: this.getSrcPath('Central_Protocol'),  name: 'Central Protocol'},
      {src: this.getSrcPath('Lerilak_Crest'),     name: 'Lerilak Crest'},
      {src: this.getSrcPath('Ruins_of_Seras'),    name: 'Ruins of Seras'},
    ]
    return {items, selectedItems: []}
  },

  componentDidMount() {
    document.body.style.backgroundColor = 'black'
  },

  handleSelection(selectedIndex) {
    var items = this.state.items.slice(0)
    var selected = items[selectedIndex]
    items.splice(selectedIndex, 1)
    var selectedItems = this.state.selectedItems.slice(0)
    selectedItems.push(selected)
    this.setState({items, selectedItems})
  },

  getSrcPath(name) {
    return '/src/images/400px-' +name +'.jpg'
  },

  render() {

    return (
      <div style={{textAlign: 'center'}}>
        <div style={{display: 'inline-block'}}>
          <div>
            Le Map Picker
          </div>
          <div>
            <WheelPicker
              items={this.state.items}
              selectedIndexCallback={this.handleSelection}
              />
          </div>
          <div>
            selectedItems:
            {
              this.state.selectedItems.map((x, i)=>{
                return (
                  <div key={i} style={{color: 'cyan', fontWeight: 'bold'}}>
                    {x.name}
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    )
  }
})

module.exports = WheelPickerViewer
