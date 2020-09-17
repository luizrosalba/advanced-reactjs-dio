import React from 'react'
import PropType from 'prop-types'

function Calc(props) {
  const { min, max, onChange } = props /// recebe propriedades 

  return (
    <div>
      <p>
        Valor mínimo: {min}
      </p>
      <p>
        Valor máximo: {max}
      </p>
      <input type="text" onChange={onChange} />  /// recebe um callback 
    </div>
  )
}

Calc.propTypes = {
  min: PropType.number.isRequired,
  max: PropType.number.isRequired,
  onChange: PropType.func.isRequired,
}

/// no onchange ele manda o valor manda pro container e o container tem toda a lógica ( ele é desacoplado )
export default Calc
