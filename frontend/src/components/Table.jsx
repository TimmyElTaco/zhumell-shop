export default function Table({ product }) {

    if(
        !product.focal_length && 
        !product.aperture && 
        !product.focal_radio &&
        !product.weight &&
        !product.close_focus_distance &&
        !product.environmental_protection &&
        !product.eye_relief
    ) {
        return (
            <p className="text-gray-300 text-pretty">
                { product.description[0] }
            </p>
        )
    }

    return (
        <table className="border-2 border-white border-opacity-25 w-2/3">
            <tbody>
                {
                    product.aperture &&
                        <tr> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center font-semibold">Aperture</td> 
                            <td className="text-center">{product.aperture} mm</td>  
                        </tr>
                }
                {
                    product.focal_length &&
                        <tr> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center font-semibold">Focal length</td> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center">{product.focal_length} mm</td>  
                        </tr>
                }
                {
                    product.focal_radio &&
                        <tr> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center font-semibold">Focal radio</td> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center">{product.focal_radio.$numberDecimal} mm</td>  
                        </tr>
                }
                {
                    product.weight &&
                        <tr> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center font-semibold">Weight</td> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center">{product.weight} kg</td>  
                        </tr>
                }
                {
                    product.close_focus_distance &&
                        <tr> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center font-semibold">Close focus distance</td> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center">{product.close_focus_distance} mm</td>  
                        </tr>
                }
                {
                    product.eye_relief &&
                        <tr> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center font-semibold">Eye relief</td> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center">{product.eye_relief.$numberDecimal} mm</td>  
                        </tr>
                }
                {
                    product.environmental_protection &&
                        <tr> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center font-semibold">Enviromental protection</td> 
                            <td className="border-2 border-white border-opacity-25 p-2 text-center">{product.environmental_protection}</td>  
                        </tr>
                }
            </tbody>
        </table>
    )
}