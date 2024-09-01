
import '../Planes/ToggleStyles.css'

const TogglePlan = ({ togglePeriodo, period }) => {
  return (
    <div className='switch-container'>
      <div className='switch-labels'>
        <span className={period === "Mensual" ? 'span-switch active' : 'span-switch'} onClick={() => togglePeriodo("Mensual")}>Mensual</span>
        <label className="switch">
          <input
            checked={period === "Anual"}
            type='checkbox'
            onChange={() => togglePeriodo(period === "Mensual" ? "Anual" : "Mensual")}
          />
          <span className='slider'></span>
        </label>
        <span className={period === "Anual" ? 'span-switch active' : 'span-switch'} onClick={() => togglePeriodo("Anual")}>Anual</span>
      </div>
    </div>
  )
}

export default TogglePlan
