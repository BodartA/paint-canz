import { Plus } from 'lucide-react';
import React from 'react';

interface StashCardsProps {
  index: number,
  name: string,
  totalPaints: number,
}

const StashCards: React.FC<StashCardsProps> = ({ index, name, totalPaints }) => {
  return (
    <div>
      <div className='flex flex-col bg-black outline-2 rounded-lg font-montserrat w-[200px]'>
        <div className=' -translate-y-1 hover:translate-y-0 transition-all outline-2 rounded-lg'>
          <div className=' flex h-[64px] border-b-[1px] rounded-t-lg border-dashed bg-pant-red items-center justify-center'>
            <h1 className=' font-bold text-xl uppercase'>Vault {index + 1}</h1>
          </div>
          <div className=' bg-cream  rounded-b-lg p-2 border-t-[1px] border-dashed'>
            <h3 className=' text-center font-bold uppercase pb-2'>{name}</h3>
            {/* <p>Vallejo : 1</p>
            <p>GW : 2</p>
            <p>AK Paints : 32</p> */}
            {
              totalPaints === 0 ? (<p className=' text-center'>No paints yet :(</p>) : (<p className=' font-semibold'>Total : {totalPaints}</p>)
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default StashCards;

export const CreateVaultCard = () => {

  return (
    <div>
      <div className='flex flex-col bg-black outline-2 rounded-lg font-montserrat w-[200px]'>
        <div className=' -translate-y-1 hover:translate-y-0 transition-all outline-2 rounded-lg'>
          <div className=' flex h-[64px] border-b-[1px] rounded-t-lg border-dashed bg-pop-green items-center justify-center'>
            <Plus size={36} strokeWidth={4} />
          </div>
          <div className=' bg-cream  rounded-b-lg p-2 border-t-[1px] border-dashed text-center flex flex-col gap-1 justify-center items-center'>
            <div className=' flex flex-row items-center gap-2'>
              <h3 className=' text-center font-bold uppercase'>New Vault</h3>
            </div>
            <p>Because every paint is like a treasure, create a Vault to store them.</p>
          </div>
        </div>
      </div>
    </div>
  )
}