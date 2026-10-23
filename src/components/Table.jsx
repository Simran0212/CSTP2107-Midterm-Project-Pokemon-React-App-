
import { Link, useNavigate} from 'react-router-dom'

import React from 'react'

const Table = (props) => {
    const data = props.data;
    const navigate = useNavigate();

  return (
    <div className='overflow-x-auto px-4 md:px-8 mt-6'>
        <table className='w-full max w-7x1 mx-auto'>
            <thead className="text-slate-900 text-left text-sm font-semibold border-b border-slate-300 whitespace-nowrap">
                <tr>
                    <th scope='col' className="pl-0 px-3 py-3.5">Name</th>
                </tr>
            </thead>
            <tbody className='text-sm divide-y divide-slate-200'>
                {
                    data?.map((pokemon) => {
                        return (
                            <tr>
                            <td className='pl-0 px-3 py-4 font-medium text-slate-900 whitespace-nowrap'>
                                <Link to={`/dashboard/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                            </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table
