export function SelectorPromocion({datosPromo}) {
    console.log(datosPromo);
    return (
        <div className="selector-promocion">        
        <select>
            <option value="0">Selecciona una promoción</option>
            {datosPromo.map((p, index)=> (
                <option key={index} value={p}>Promoción:{p}</option>))
            }
        </select>
        </div>
    );
}

export default SelectorPromocion;