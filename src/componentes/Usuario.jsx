import { Camera } from 'lucide-react';
import { Trash } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Eye } from 'lucide-react';

export function Usuario({ nombre, apellido, imagen }) {
  return (
    <div className="border p-5 shadow-xl bg-white rounded-xl border-grey-300 
        hover:translate-y[-10px] hover:shadow-2xl duration-300">
            Componente Usuario
        <div className="w-[100px rounded-full border overflow-hidden border-gre-200
            ">
            <img 
                className="scale-125"
                src="/src/assets/OIP.webp" 
                alt="Usuario Imagen" 
            />
        </div>
        <div className="text-center">
            <div className="font-bold text-xl">Pepe</div>
            <div>Sanchez Perol</div>
            <diV className="flex justify-center gap-1 mt-2">
                <div>
                    <Camera className="mt-2 " size={18}/>
                </div>
                <div>
                    <Trash className="duration-300 hover:scale-125 mt-2 text-red-600" size={18} color={"red"}/>
                </div>

                <div>
                    <Pencil className="duration-300 hover:scale-125 mt-2 text-green-600" size={18} color={"yellow"}/>
                </div>

                <div>
                    <Eye className="duration-300 hover:scale-125 mt-2 text-blue-600" size={18} color={"green"}/>
                </div>
            </diV>
        </div>
    </div>
  );
}